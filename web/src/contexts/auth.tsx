import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthProvider = {
    children: ReactNode;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    signOut: () => void;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
    const [user, setUser] = useState<User | null>(null);
    
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=748cf7544fe4d50dbc4b`;
    
    async function singIn(gitHubCode: string) {
        const response = await api.post<AuthResponse>('authenticate', { code: gitHubCode });
        const { token, user } = response.data;
        localStorage.setItem('@dowhile:token', token);
        localStorage.setItem('@dowhile:name', user.name);
        localStorage.setItem('@dowhile:avatar_url', user.avatar_url);
        localStorage.setItem('@dowhile:login', user.login);
        setUser(user);
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@dowhile:token');
    }

    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token');
        if(token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            api.get<User>('profile/user').then(response => {
                setUser(response.data);
            });
        }
    })

    useEffect(() => {
        const url = window.location.href;
        const hasGitHubCode = url.includes('?code=');

        if(hasGitHubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=');
            // limpando url
            window.history.pushState({}, '', urlWithoutCode);
            singIn(githubCode);
        }
    })


    return (
        <AuthContext.Provider value={{ user, signInUrl, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}