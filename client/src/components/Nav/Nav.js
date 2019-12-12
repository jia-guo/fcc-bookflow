import React from 'react';
import NavLogo from './NavLogo';
import renderMenuItems from './renderMenuItems';
import './Nav.css';

class Nav extends React.Component {
  state = { 
    navSmallOpen: false
  }
  handleNavClick = name => {
    this.setState({ navSmallOpen: false })
    this.props.changeNav(name);
  }
  toggleNavSmall = () => this.setState({ navSmallOpen: !this.state.navSmallOpen })
  render() {
    let isLogin = !!this.props.token;
    let { navSmallOpen } = this.state;
    return (
      <div className="nav-root">
        <div className="nav-inner-wrapper">
          <NavLogo handleNavClick={this.handleNavClick} />
          <div className="nav-normal">
            {renderMenuItems(isLogin, this.props.curNav, this.handleNavClick)}
          </div>
          <div className="nav-small nav-small-icon" onClick={this.toggleNavSmall}>
            <div className="nav-small-icon-top" />
            <div className="nav-small-icon-mid" />
            <div className="nav-small-icon-bot" />
          </div>
        </div>
        <div className={navSmallOpen ? "nav-small nav-small-menu open" : "nav-small nav-small-menu"}>
          {renderMenuItems(isLogin, this.props.curNav, this.handleNavClick)}
        </div>
      </div>
    )
  }
}

export default Nav;
