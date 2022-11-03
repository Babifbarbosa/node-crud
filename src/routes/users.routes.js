import { Router } from "express";

import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import createUserController from "../controllers/createUser.controllers";
import userLoginController from "../controllers/userLogin.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.post("/login", userLoginController);
router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("", listUsersController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default router;
