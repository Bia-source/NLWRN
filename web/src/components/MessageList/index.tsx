import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface IMessagesData{
        infoMessage: {
            id: string;
            text: string;
            favorite: boolean;
            create_at: Date;
        }
        userSender: {
            id: string;
            name: string;
            github_id: number;
            avatar_url: string;
            login: string
        }
}

export function MessageList() {
    const [messages, setMessages] = useState<IMessagesData[]>([])
    
    useEffect(() => {
        api.get('messages/last6').then(res => {
            setMessages(res.data.message);
        })
   }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                {messages.map(message => {
                        return (
                            <li key={message.infoMessage.id} className={styles.message}>
                                <p className={styles.messageContent}>
                                    {message.infoMessage.text}
                                </p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userImage}>
                                        <img src={message.userSender.avatar_url} alt={message.userSender.login} />
                                    </div>
                                    <span>{message.userSender.name}</span>
                                </div>
                               
                            </li>
                        );
                })} 
            </ul>
        </div>
    )
}