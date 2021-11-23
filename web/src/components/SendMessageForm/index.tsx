import { useEffect, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import styles from "./styles.module.scss";

type User = {
    id?: string;
    name: string;
    login: string;
    avatar_url: string;
}

export function SendMessageForm() {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        let avatar_url = localStorage.getItem('@dowhile:avatar_url');
        let name = localStorage.getItem('@dowhile:name');
        let login = localStorage.getItem('@dowhile:login');
        if(avatar_url && name && login) {
            setUser({avatar_url, name, login});
        }
    })
    
    return (
        <div className={styles.sendMessageFormWrapper}>
            <button className={styles.signOutButton}>
                <VscSignOut size="32"/>
            </button>
            
            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name}/>
                </div>
                <strong className={styles.userName}> {user?.name} </strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted/>
                    {user?.login}
                </span>
            </header>

            <form className={styles.sendMessageForm}>
                <label htmlFor="message"> Mensagem </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Qual sua expectativa para o evento?"
                />

                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    )
}