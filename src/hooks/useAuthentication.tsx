import { useState, useEffect } from 'react';
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

interface UserProps {
    email: string;
    pass: string
}

export const useAuthentication = () => {
    const [error, setError] = useState<string | null | boolean>(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    //cleanup
    const [cancelled, setCancelled] = useState(false)

    function checkIsCancelled() { if (cancelled) return }

    const createUser = async (data: UserProps) => {
        checkIsCancelled();
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.pass
            )

            return user;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
                console.log(typeof error.message);

                let systemError = ''
                if (error.message.includes("Passwords")) {
                    systemError = 'A senha precisa ter pelo menos seis caracteres'
                } else if (error.message.includes("email-already")) {
                    systemError = 'Email já cadastrado'
                } else {
                    systemError = 'Ocorreu um erro! tente novamente mais tarde.'
                }
                setError(systemError);
            }
        } finally {
            setLoading(false);
        }
    }

    const logOut = () => {
        checkIsCancelled();
        signOut(auth);
    }

    const login = async (data: UserProps) => {
        checkIsCancelled()
        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.pass);
        } catch (error: unknown) {
            let systemError = ''
            if (error instanceof Error) {
                if (error.message.includes("auth/invalid-credential")) {
                    systemError = 'Credenciais inválidas'
                } else {
                    systemError = 'Ocorreu um erro! tente novamente mais tarde.'
                }
            }
            setError(systemError);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        createUser,
        logOut,
        login,
        error,
        loading
    }
}