import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./global/GlobalStyle";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/authContext";
import { auth } from './firebase/config'

//pages
import HomePage from "./pages/home";
import Create from "./pages/create";
import LoginPage from "./pages/login";
import NavBar from "./components/navBar";

const App = () => {

    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return (
        <AuthProvider value={{ user }}>
            <GlobalStyle />
            <BrowserRouter>
                {user && <NavBar />}
                <Routes>
                    <Route path="/" element={user ? <HomePage /> : <Navigate to={'/login'} />} />
                    <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={'/'} />} />
                    <Route path="/create/new" element={user ? <Create /> : <Navigate to={'/login'} />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;