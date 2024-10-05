import * as Css from './style';

interface SignInProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

const SignIn: React.FC<SignInProps> = ({ setSignIn }) => {
    return (
        <Css.SignInContainer>
            <h1>Bem-vindo de volta!</h1>
            <p>Bem-vindo de volta! Acesse com os seus dados:</p><br /><br />

            <label>
                Email: <br />
                <input
                    type="email"
                    placeholder='Insira o seu e-mail:'
                    required
                />
            </label><br />

            <label>
                Senha: <br />
                <input
                    type="password"
                    placeholder='Informe a sua senha:'
                    required
                />
            </label><br />

            <button>Entrar</button>
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