import { Message } from "@prisma/client";
import { Request, Response } from "express";
import { GetLastMessagesService } from "../services/GetLastMessagesService";

class GetLastMessagesController {
    async handle(request: Request, response: Response): Promise<Response<Message[]>> {
        try {
            const messageService = new GetLastMessagesService();
            const result = await messageService.execute();
            return response.json({
                messages: result
            });
        } catch (error) {
            return response.json({
                messageError: error.message
            });
        }
   }
}

export { GetLastMessagesController }