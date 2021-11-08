import { Request, Response } from "express";
import { NotFavoriteService } from "../services/NotFavoriteService";


class NotFavoriteController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { idMessage } = request.body;
       try {
            const messageService = new NotFavoriteService();
            const message = await messageService.execute(idMessage);
            return response.json({
               message
            });
       } catch (error) {
            return response.json({
                messageError: error.message
            });
       }
   }
}

export { NotFavoriteController }