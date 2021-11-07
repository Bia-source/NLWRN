import { Message } from "@prisma/client";
import prismaClient from "../prisma"

interface IReturnFilterMessage{
    id: string;
    text: string;
    create_at: Date
}

interface IInfoMessage {
    id: string;
    text: string;
    create_at: Date;
}

interface IUserSender {
    id: string;
    name: string;
    github_id: number;
    avatar_url: string;
    login: string;
}

interface IReturnGetMessages {
    infoMessage: IInfoMessage;
    userSender: IUserSender;
}
class GetLastMessagesService {
    async execute(): Promise<IReturnGetMessages[]> {
        const messages = await prismaClient.message.findMany({
            take: 6,
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true
            }
        });
        const result: IReturnGetMessages[] = [];
        messages.map(message => {
            return result.push({ infoMessage: this.filterMessages(message), userSender: message.user });
        })
        console.log(result);
        return result; 
    }

    private filterMessages(data: Message): IReturnFilterMessage {
        return {
            id: data.id,
            text: data.text,
            create_at: data.create_at
        }
    }

}

export { GetLastMessagesService }