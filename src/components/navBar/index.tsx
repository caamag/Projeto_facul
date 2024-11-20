import * as Css from "./style";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

const NavBar = () => {
  const { logOut } = useAuthentication();

  return (
    <Css.NavContainer>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/create/new"}>CRIAR RECEITA</NavLink>
      <NavLink to={"/community"}>COMUNIDADE</NavLink>

      <button
        onClick={() => {
          logOut();
          window.location.reload();
        }}
      >
        SAIR
      </button>
    </Css.NavContainer>
  );
};

export default NavBar;
