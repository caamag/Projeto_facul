import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./global/GlobalStyle";

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const App = () => {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
