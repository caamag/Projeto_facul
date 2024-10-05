import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./global/GlobalStyle";
//import { useState, useEffect } from "react";

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

//components

const App = () => {
  //const [user, setUser] = useState(undefined);



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
