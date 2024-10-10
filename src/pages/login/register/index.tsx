import * as Css from './style';
import React, { useState } from 'react';
import { useAuthentication } from '../../../hooks/useAuthentication';
import LoadingIcon from '../../../assets/loading-icon.jpg'
import ResponseMessage from '../../../components/reponseMessage';
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
    const { createUser, loading, error } = useAuthentication();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: UserProps = {
            email,
            pass
        }

        await createUser(user);
    }

    return (
        <Css.RegisterContainer>
            {error && <ResponseMessage status='error' message={error} />}
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

                {loading && <Css.LoaderContainer>
                    <Css.Loader src={LoadingIcon} />
                </Css.LoaderContainer>}

                {!loading && <button type='submit'>Cadastrar</button>}
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