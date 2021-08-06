import "./header.sass";
import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import logo from "./../assets/logo_white1.png";

class Header extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { match, location, history } = this.props;
        const currentPath = location.pathname;
        return (
            <div id="header">
                <img src={logo} />
                <div className="links">
                    <HeaderLink
                        currentPath={currentPath}
                        path="/"
                        name="Gallery"
                    />
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
}

const HeaderLink = (props) => {
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
};

export default withRouter(Header);
