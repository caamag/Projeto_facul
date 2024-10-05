import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./global/GlobalStyle";
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from "./hooks/useAuthentication";
import { AuthProvider } from "./context/authContext";
import { useState, useEffect } from "react";

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user)
    })
  }, [auth])

  const loadingUser = user === undefined;
  if (loadingUser) {
    return <p>carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <HomePage /> : <Navigate to={'/login'} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;
