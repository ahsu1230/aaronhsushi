import "./header.sass";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import HeaderFull from "./headerFull.js";
import HeaderSticky from "./headerSticky.js";

class Header extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { match, location, history } = this.props;
    const currentPath = location.pathname;
    const onHomePage = currentPath === "/";
    return (
      <div id="header">
        {onHomePage ? (
          <HeaderFull currentPath={currentPath} />
        ) : (
          <HeaderSticky currentPath={currentPath} />
        )}
      </div>
    );
  }
}

export default withRouter(Header);
