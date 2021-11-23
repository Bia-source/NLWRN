import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import styles from './styles.module.scss';


export function LoginBox() {
    const { signInUrl } = useContext(AuthContext);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com GitHub
            </a>

            <a href="#" className={styles.signInWithFacebook}>
                <AiFillFacebook size="24" />
                Entrar com Facebook
            </a>

            <a href="#" className={styles.signInWithInstagram}>
                <AiFillInstagram size="24" />
                Entrar com Instagram
            </a>
        </div>
    )
}