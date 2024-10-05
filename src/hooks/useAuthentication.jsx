
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanup
    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth();

    function checkIsCancelled() { if (cancelled) return }

    const createUser = async (data) => {
        checkIsCancelled();
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.pass
            )

            return user;
        } catch (error) {
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
        } finally {
            setLoading(false);
        }
    }

    const logOut = () => {
        checkIsCancelled();
        signOut(auth);
    }

    const login = async (data) => {
        checkIsCancelled()
        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.pass);
        } catch (error) {
            let systemError = ''
            if (error.message.includes("auth/invalid-credential")) {
                systemError = 'Credenciais inválidas'
            } else {
                systemError = 'Ocorreu um erro! tente novamente mais tarde.'
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
        auth,
        createUser,
        logOut,
        login,
        error,
        loading
    }
}