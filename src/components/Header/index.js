import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styles";
import profile from "../../images/profile.jpg";

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={profile} alt="Douglas Araujo" height={100} width={100} />
          </Link>
          <div className="headerTitle">
            <h1>Douglas Alcantara de Araujo</h1>
            <h3>Desenvolvedor &lt;FullStack&gt;</h3>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/experiences">Experiência Profssional</Link>
            </li>
            <li>
              <Link to="/school">Escolaridade</Link>
            </li>
            <li>
              <Link to="/skills">Habilidades</Link>
            </li>
            <li>
              <Link to="/extra">Informações adicionais</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
