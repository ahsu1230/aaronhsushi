import { Link } from "react-router-dom";

export default function HeaderLink(props) {
    const currentPath = props.currentPath;
    const path = props.path;
    const name = props.name;
    let activeClass = "";
    if (path === "/") {
        activeClass = currentPath === "/" ? "active" : "";
    } else {
        activeClass = currentPath.indexOf(path) >= 0 ? "active" : "";
    }
    return (
        <Link className={activeClass} to={path}>
            {name}
        </Link>
    );
}
