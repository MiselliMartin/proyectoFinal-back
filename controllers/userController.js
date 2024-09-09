import httpStatus from "../helpers/httpStatus.js";
import { encrypt, verified } from "../utils/bcrypt.js";
import { PrismaClient } from "@prisma/client";
import { generateToken, verifyToken } from "../utils/jwt.service.js";

const prisma = new PrismaClient();

export const userController = () => {
  const register = async (req, res, next) => {
    const newUser = req.body;
    const hashPass = await encrypt(newUser.password);
    newUser.password = hashPass;

    try {
      const createdUser = await prisma.user.create({ data: newUser });

      //manejo de token en cookies
      const token = generateToken({
        id: createdUser.id,
        email: createdUser.email,
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });

      const responseFormat = {
        data: createdUser,
        token,
        message: "User created successfully",
      };

      return res.status(httpStatus.CREATED).json(responseFormat);
    } catch (error) {
      next(error);
    } finally {
      await prisma.$disconnect();
    }
  };

  const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        res.clearCookie("token");
        return res
          .status(httpStatus.NOT_FOUND)
          .json({ message: "User not found" });
      }
      const isMatch = await verified(password, user.password);
      if (!isMatch) {
        res.clearCookie("token");
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ message: "Invalid credentials" });
      }

      const token = generateToken({ id: user.id, email: user.email });
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });

      const responseFormat = {
        data: createdUser,
        token,
        message: "Successfully login",
      };

      return res.status(httpStatus.OK).json(responseFormat);
    } catch (error) {
      next(error);
    } finally {
      await prisma.$disconnect();
    }
  };

  const logout = async (_req, res, _next) => {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out." });
  };

  const updateById = async (req, res, next) => {
    const id = req.tokenId;

    const updateUser = req.body;
    try {
      const user = await prisma.user.update({
        where: { id },
        data: updateUser,
      });

      const responseFormat = {
        data: user,
        message: "User updated successfully",
      };

      return res.status(200).json(responseFormat);
    } catch (err) {
      return next(err);
    } finally {
      await prisma.$disconnect();
    }
  };

  const deleteById = async (req, res, next) => {
    const id = req.tokenId;

    try {
      await prisma.user.delete({
        where: { id },
      });

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      return next(err);
    } finally {
      await prisma.$disconnect();
    }
  };

  const profile = async (req, res, next) => {
    const { id } = req.body;
    try {
      const user = await prisma.user.findUnique({ where: { id } });

      const responseFormat = {
        data: user,
        message: "User retrieved successfully",
      };

      return res.status(200).json(responseFormat);
    } catch (err) {
      next(err);
    } finally {
      await prisma.$disconnect();
    }
  };

  const verify = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ message: "No token provided" });
      }

      const decoded = verifyToken(token);
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });

      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .json({ message: "User not found" });
      }

      const responseFormat = {
        data: user,
        message: "Token is valid.",
      };

      return res.status(200).json(responseFormat);
    } catch (error) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User unauthorized" });
    } finally {
      await prisma.$disconnect();
    }
  };

  return {
    register,
    login,
    logout,
    updateById,
    deleteById,
    profile,
    verify,
  };
};
