import { Message } from "@prisma/client";
import prismaClient from "../prisma";

class NotFavoriteService {
    async execute(idMessage: string): Promise<Message>{
        return await prismaClient.message.update({
            where: {
                id: idMessage
            },
            data: {
                favorite: false
            }
        });
   }
}

export { NotFavoriteService }