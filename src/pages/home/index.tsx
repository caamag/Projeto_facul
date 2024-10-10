import * as Css from './style'
import { useAuthentication } from '../../hooks/useAuthentication';

const HomePage = () => {

    const { logOut } = useAuthentication()

    return (
        <Css.container>
            <h1>Home page</h1>
            <button onClick={() => { logOut() }}>Sair</button>
        </Css.container>
    )
}

export default HomePage;