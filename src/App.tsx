import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./global/GlobalStyle";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/authContext";
import { auth } from './firebase/config'

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const App = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);

    const loadingUser = user === undefined;
    if (loadingUser) {
        return <p>carregando...</p>
    }

    return (
        <AuthProvider value={{ user }}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={user ? <HomePage /> : <Navigate to={'/login'} />} />
                    <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={'/'} />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
