import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/message", ensureAuthenticate, new CreateMessageController().handle)

export { router }