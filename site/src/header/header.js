import { Link } from "react-router-dom";
export default function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Gallery</Link>
            </li>
            <li>
                <Link to="/story">Story</Link>
            </li>
            <li>
                <Link to="/inspiration">Inspiration</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
    );
}
