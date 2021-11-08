import { Request, Response } from "express";
import { FavoriteMessageService } from "../services/FavoriteMessageService";

class FavoriteMessageController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { idMessage } = request.body;
        try {
             const messageService = new FavoriteMessageService();
             const newMessage = await messageService.execute(idMessage);
             return response.json({
             newMessage
             });
        } catch (error) {
            return response.json({
                messageError: error.message
            });
        }
    }
}

export { FavoriteMessageController }