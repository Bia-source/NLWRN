import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { message } = request.body;
        const { user_id } = request;
        try {
            const messageService = new CreateMessageService();
            const messageRes = await messageService.execute(message, user_id);
            return response.json(messageRes);
        } catch (error) {
            return response.json(error.message);
        }
    }
}

export { CreateMessageController }