import { User } from "@prisma/client";
import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
    async handle(request: Request, response: Response): Promise<Response<User>>{
        const { user_id } = request;
        try {
            const user = await new ProfileUserService().execute(user_id);
            return response.json({
            user: user
            });
        } catch (error) {
            return response.json({
                messageError: error.message
            });
        }
    }
}

export { ProfileUserController }