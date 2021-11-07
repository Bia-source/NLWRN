import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { code } = request.body;
        try {
            const authenticateUser = new AuthenticateUserService();
            const result = await authenticateUser.execute(code);
            return response.json({
                token: result.token,
                user: result.user
            });
        } catch (error) {
            return response.json({
                messageError: error.message
            });
        }
   }
}

export { AuthenticateUserController }