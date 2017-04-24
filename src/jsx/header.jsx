'use strict';

class HeaderLogo extends React.Component {
  render() {
  	const imgSrc = this.props.isFullWindow ? "assets/logo_full.png" : "assets/logo_small.png";
    return (
    	<a href="/">
			<img src={imgSrc}/>
		</a>
	);
  }
}

class HeaderLink extends React.Component {
  render() {
    return (
    	<a href={this.props.url} className="header-link-container">
    		<div>{this.props.title}</div>
    		<div className="header-link-underline"></div>
    	</a>
	);
  }
}

function HeaderLinks(props) {
	const items = props.links.map((link) => 
		<HeaderLink title={link.title} url={link.url}/>
	);
	return (
		<div>{items}</div>
	);
}


ReactDOM.render(
  <HeaderLogo isFullWindow={true}/>,
  document.getElementById('header-logo')
);

const links = [
	{ title: "About Me", url: "/aboutme"},
	{ title: "Gallery", url: "/gallery"}
];
ReactDOM.render(
  <HeaderLinks links={links}/>,
  document.getElementById('header-links')
);
