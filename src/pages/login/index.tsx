import * as Css from './style';
import { useState } from 'react';
import SignIn from './signIn';

const LoginPage = () => {

    const [signIn, setSignIn] = useState<boolean>(true);

    return (
        <Css.Logincontainer>
            <Css.Login>
                {signIn && <SignIn setSignIn={setSignIn} />}
            </Css.Login>

            <Css.LoginDesign>
                <Css.DesignCircle></Css.DesignCircle>
                <Css.DesignBlock></Css.DesignBlock>
            </Css.LoginDesign>
        </Css.Logincontainer>
    )
}

export default LoginPage;