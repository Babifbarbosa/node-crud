import { Router } from "express";

import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import createUserController from "../controllers/createUser.controllers";

const router = Router();

router.post("", createUserController);
router.get("", listUsersController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
