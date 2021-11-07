import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href="#" className={styles.signInWithGithub}>
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