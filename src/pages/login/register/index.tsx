import * as Css from './style';


interface ReigisterProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Register: React.FC<ReigisterProps> = ({ setSignIn }) => {
    return (
        <Css.RegisterContainer>
            <h1>Crie a sua conta!</h1>
            <p>Registre-se para ter acesso ao nosso conteúdo.</p><br /><br />

            <label>
                Email: <br />
                <input
                    type="email"
                    placeholder='Informe um e-mail válido:'
                    required
                />
            </label><br />

            <label>
                Senha: <br />
                <input
                    type="password"
                    placeholder='Crie uma senha:'
                    required
                />
            </label><br />
            <button>Cadastrar</button>

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