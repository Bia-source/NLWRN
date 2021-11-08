import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { FavoriteMessageController } from "../controllers/FavoriteMessageController";
import { GetLastMessagesController } from "../controllers/GetLastMessagesController";
import { NotFavoriteController } from "../controllers/NotFavoriteController";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/message", ensureAuthenticate, new CreateMessageController().handle);
router.get("/messages/last6", new GetLastMessagesController().handle);
router.get("/profile/user", ensureAuthenticate, new ProfileUserController().handle);
router.patch("/favorite/message", ensureAuthenticate, new FavoriteMessageController().handle);
router.patch("/not-favorite/message", ensureAuthenticate, new NotFavoriteController().handle);

export { router }