import "./header.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container navbar">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navbar">
            <Link to="/pages/Movie">Filmes</Link>
            <Link to="/pages/Movie">Séries</Link>
            <Link to="/pages/Book">Livros</Link>
          </ul>
          <form className="search">
            <input type="text" placeholder="Search"></input>
          </form>
          <div className="language">
            <p>US</p>
            <p>ER</p>
          </div>
          <button className="login">login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
