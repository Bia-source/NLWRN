import { Message } from "@prisma/client";
import prismaClient from "../prisma"

class FavoriteMessageService {
    async execute(idMessage: string): Promise<Message> {
        const message = await prismaClient.message.update({
            where: {
                id: idMessage
            },
            data: {
                favorite: true
            }
        });
        return message;
    }
}

export { FavoriteMessageService }