import { Message } from "@prisma/client";
import { io } from "../app";
import prismaClient from "../prisma"

class CreateMessageService {
    async execute(text: string, user_id: string): Promise<Message> {  
        try {
            const message = await prismaClient.message.create({
            data: {
                text,
                user_id,
                favorite: false
            },
            include: {
                user: true
            }
            });
        
            const infoWS = {
             text: message.text,
             user_id: message.user_id,
             created_at: message.create_at,
             favorite: false,
             user: {
                 name: message.user.name,
                 avatar_url: message.user.avatar_url
             }
            }
            
            io.emit("new_message", infoWS);
            
            return message;
            
        } catch (error) {
            throw new Error("Erro no envio da mensagem, tente novamente mais tarde");
            
        }
        

      
    }
}

export { CreateMessageService }