import * as Css from './style';
import React, { useState } from 'react';
import { useAuthentication } from '../../../hooks/useAuthentication';
//import { auth } from '../../../firebase/config';
interface ReigisterProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserProps {
    email: string;
    pass: string;
}

const Register: React.FC<ReigisterProps> = ({ setSignIn }) => {

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const { createUser } = useAuthentication();
    //const { error } = useAuthentication();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: UserProps = {
            email,
            pass
        }

        const res = await createUser(user);
        console.log(res);
    }

    return (
        <Css.RegisterContainer>
            <h1>Crie a sua conta!</h1>
            <p>Registre-se para ter acesso ao nosso conteúdo.</p><br /><br />

            <form onSubmit={handleSubmit}>
                <label>
                    Email: <br />
                    <input
                        type="email"
                        placeholder='Informe um e-mail válido:'
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </label><br />

                <label>
                    Senha: <br />
                    <input
                        type="password"
                        placeholder='Crie uma senha:'
                        required
                        value={pass}
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                </label><br />
                <button type='submit'>Cadastrar</button>
            </form>

            <Css.SignIn>
                Já possui uma conta?
                <span
                    onClick={() => {
                        setSignIn(true);
                    }}
                >
                    Entrar com conta existente
                </span>
            </Css.SignIn>

        </Css.RegisterContainer>
    )
}

export default Register;