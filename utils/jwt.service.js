import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.SECRET_KEY || "default-secret";

export const generateToken = (data) => {
  const token = jwt.sign(data, JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

export const verifyToken = (token) => {
  try {
    const verifiedToken = jwt.verify(token, JWT_SECRET);
    return verifiedToken;
  } catch (err) {
    if (
      err.name === "JsonWebTokenError" &&
      err.message === "invalid signature"
    ) {
      console.error("El token ha sido alterado o manipulado");
      return null;
    } else if (err.name === "TokenExpiredError") {
      console.error("El token ha expirado");
      return null;
    } else {
      console.error("Error al verificar el token:", err.message);
      return null;
    }
  }
};
