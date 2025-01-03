import * as Css from './style';
import { useState } from 'react';
import SignIn from './signIn';
import Register from './register';

const LoginPage = () => {

    const [signIn, setSignIn] = useState<boolean>(true);

    return (
        <Css.Logincontainer>
            <Css.Login>
                {signIn && <SignIn setSignIn={setSignIn} />}
                {!signIn && <Register setSignIn={setSignIn} />}
            </Css.Login>

            <Css.LoginDesign></Css.LoginDesign>
        </Css.Logincontainer>
    )
}

export default LoginPage;