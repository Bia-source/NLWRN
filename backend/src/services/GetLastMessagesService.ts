import { Message } from "@prisma/client";
import prismaClient from "../prisma"

class GetLastMessagesService {
    async execute(): Promise<Message[]> {
        const messages = await prismaClient.message.findMany({
            take: 6,
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true
            }
        });
        return messages;
   }
}

export { GetLastMessagesService }