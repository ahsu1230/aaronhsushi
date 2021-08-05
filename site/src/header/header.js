import "./header.sass";
import { Link } from "react-router-dom";
import logo from "./../assets/logo_white1.png";

export default function Header() {
    return (
        <div id="header">
            <img src={logo} />
            <div className="links">
                <Link to="/">Gallery</Link>
                <Link to="/story">Story</Link>
                <Link to="/inspiration">Inspiration</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}
