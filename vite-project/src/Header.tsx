import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <ul className="nav">
        <li style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}><Link to="/">Home</Link></li>
        <li style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}><Link to="/services">Services</Link></li>
        <li style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}><Link to="/book">Book Me Here</Link></li>
        <li style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}

export default Header;
