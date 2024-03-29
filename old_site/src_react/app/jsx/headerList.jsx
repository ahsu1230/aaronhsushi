'use strict';
require('./../styl/headerList.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { isPathAt } from './constants.jsx';
var classNames = require('classnames');

const headerHeight = 80;
const modalStyle = {
	overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 9999
	},
	content : {
	    top: headerHeight + 'px',
	    left: '10%',
	    padding: '0',
	    border: 'none',
	    backgroundColor: 'transparent',
      transition: 'all linear 0.2s'
	}
};

export class HeaderList extends React.Component {
  constructor() {
      super();
      this.state = {
        showModal: false,
        showList: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.showList = this.showList.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
      showList: false
    });
  }

  showList() {
    this.setState({
      showList: true
    });
  }

  render() {
    var listClasses = classNames("list-link-container", {
      "show": this.state.showList
    });
    const items = this.props.links.map((link) =>
      <ListLink key={link.id} title={link.title} url={link.url} toggleModal={this.toggleModal}/>
    );
    var showListClasses = classNames("header-list-modal", {
      "show": this.state.showList
    });
    return (
      <div>
        <button className="header-list-btn" onClick={this.toggleModal}></button>
        <Modal
		          isOpen={this.state.showModal}
              onAfterOpen={this.showList}
		          onRequestClose={this.toggleModal}
		          style={modalStyle}
		          contentLabel="Header List Modal">
          <button className="header-close-btn" onClick={this.toggleModal}/>
          <div className={showListClasses}>
            {items}
          </div>
		    </Modal>
      </div>
    );
  }
}

class ListLink extends React.Component {
  render() {
    var linkClasses = classNames("header-list-link", {
      "active": isPathAt(this.props.url)
    });
    return (
    	<Link to={this.props.url} className={linkClasses} onClick={this.props.toggleModal}>
    		<span>{this.props.title}</span>
    	</Link>
		);
  }
}
