import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { schemaValidator } from "../middlewares/validations.js";
import { validateToken } from "../middlewares/validateToken.js";
import {
  userLoginSchema,
  userRegisterSchema,
  updateUserSchema,
} from "../schemas/userSchemas.js";

const userRouter = Router();
const { register, login, deleteById, updateById, getById, logout, verify } =
  userController();

userRouter.post("/register", schemaValidator(userRegisterSchema), register);
userRouter.post("/login", schemaValidator(userLoginSchema), login);
userRouter.post("/logout", logout);
userRouter.patch(
  "/user",
  validateToken,
  schemaValidator(updateUserSchema),
  updateById
);
userRouter.get("/user", profile);
userRouter.delete("/user", validateToken, deleteById);
userRouter.get("/verify", verify);

export default userRouter;
