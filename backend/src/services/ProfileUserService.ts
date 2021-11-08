import { User } from "@prisma/client";
import prismaClient from "../prisma";

class ProfileUserService {
    async execute(user_id:string): Promise<User> {
        return await prismaClient.user.findUnique({
            where: {
                id: user_id
            }
        });
    }
}

export { ProfileUserService }