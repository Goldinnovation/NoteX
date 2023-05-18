import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-area">
        <h2 className="logo-area">
            profilpic 
        </h2>
      {" "}
      <nav>
        {" "}
        <Link to="/" className="nav-links"> Home</Link>
        <Link to="/Favorite" className="nav-links">Favorite</Link>
        <Link to="/Settings" className="nav-links">Settings</Link>
      </nav>
    </div>
  );
};