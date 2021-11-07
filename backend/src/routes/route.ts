import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { GetLastMessagesController } from "../controllers/GetLastMessagesController";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { GetLastMessagesService } from "../services/GetLastMessagesService";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/message", ensureAuthenticate, new CreateMessageController().handle);
router.get("/messages/last6", new GetLastMessagesController().handle);
router.get("/profile/user", ensureAuthenticate, new ProfileUserController().handle);

export { router }