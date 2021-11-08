import { Message } from "@prisma/client";
import prismaClient from "../prisma"

class FavoriteMessageService {
    async execute(idMessage: string): Promise<Message> {
        try {
            return await prismaClient.message.update({
            where: {
                id: idMessage
            },
            data: {
                favorite: true
            }
            });
        } catch (error) {
            throw new Error("Erro ao tentar favoritar esta mensagem");
        }
    }
}

export { FavoriteMessageService }