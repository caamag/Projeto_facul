import * as Css from './style';
import { useState } from 'react';
import { useAuthentication } from '../../../hooks/useAuthentication';
import LoadingIcon from '../../../assets/loading-icon.jpg';
import ResponseMessage from '../../../components/reponseMessage';

interface SignInProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserProps {
    email: string;
    pass: string;
}

const SignIn: React.FC<SignInProps> = ({ setSignIn }) => {

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const { login, loading, error } = useAuthentication();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const user: UserProps = {
            email,
            pass
        }

        await login(user)
    }


    return (
        <Css.SignInContainer>
            {error && <ResponseMessage status='error' message={'Erro ao prosseguir.'} />}
            <h1>Bem-vindo de volta!</h1>
            <p>Bem-vindo de volta! Acesse com os seus dados:</p><br /><br />

            <form onSubmit={handleSubmit}>
                <label>
                    Email: <br />
                    <input
                        type="email"
                        placeholder='Insira o seu e-mail:'
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </label><br />

                <label>
                    Senha: <br />
                    <input
                        type="password"
                        placeholder='Informe a sua senha:'
                        required
                        value={pass}
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                </label><br />

                {loading && <Css.LoaderContainer>
                    <Css.Loader src={LoadingIcon} />
                </Css.LoaderContainer>}
                {!loading && <button>Entrar</button>}
            </form>

            <Css.CreateAccount>
                Não possui conta ainda?
                <span
                    onClick={() => {
                        setSignIn(false);
                    }}>
                    Criar conta
                </span>
            </Css.CreateAccount>
        </Css.SignInContainer>
    )
};

export default SignIn;