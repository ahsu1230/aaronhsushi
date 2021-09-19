import HeaderLink from "./headerLink.js";
import logo from "./../assets/logo_white1.png";

export default function HeaderSticky(props) {
    const currentPath = props.currentPath;
    return (
        <div className="header-sticky">
            <a href="/">
                <img className="logo" src={logo} />
            </a>
            <div className="links">
                <HeaderLink currentPath={currentPath} path="/" name="Gallery" />
                <HeaderLink
                    currentPath={currentPath}
                    path="/story"
                    name="Story"
                />
                <HeaderLink
                    currentPath={currentPath}
                    path="/inspiration"
                    name="Inspiration"
                />
                <HeaderLink
                    currentPath={currentPath}
                    path="/contact"
                    name="Contact"
                />
            </div>
        </div>
    );
}
