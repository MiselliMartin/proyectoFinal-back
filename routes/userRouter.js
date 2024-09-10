import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { schemaValidator } from "../middlewares/schemaValidate.js";
import { validateToken } from "../middlewares/validateToken.js";
import {
  userLoginSchema,
  userRegisterSchema,
  userUpdateSchema,
} from "../schemas/userSchemas.js";

const userRouter = Router();
const { register, login, deleteById, update, profile, logout, verify } =
  userController();

userRouter.post("/register", schemaValidator(userRegisterSchema), register);
userRouter.post("/login", schemaValidator(userLoginSchema), login);
userRouter.post("/logout", logout);
userRouter.patch(
  "/user",
  validateToken,
  schemaValidator(userUpdateSchema),
  update
);
userRouter.get("/user", profile);
userRouter.delete("/user", validateToken, deleteById);
userRouter.get("/verify", verify);

export default userRouter;
