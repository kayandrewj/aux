import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthPage = this.isAuthPage.bind(this);
    this.authButtons = this.authButtons.bind(this);
    this.usersName = this.usersName.bind(this);
  }

  isAuthPage() {
    return(
      this.props.pageType === '/login' || this.props.pageType === '/signup'
    );
  }

  usersName() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }

  authButtons() {
    if (this.isAuthPage()) {
      return(
        <div className='nav-buttons'>
          <Link to={'/'}>Main</Link>
        </div>
      );
    } else if (!this.isAuthPage() && !this.props.loggedIn) {
      return(
        <div className='nav-buttons'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </div>
      );
    } else {
      return(
        <div className='nav-buttons'>
          <a href="#" className="nav-greeting">{this.usersName()}</a>
          <button className="log-out" onClick={this.props.logout}>Log out</button>
        </div>
      );
    }
  }

  render() {
  return(

    <div className="nav-god">
      <h1>AUX</h1>
      <span>
        {this.authButtons()}
      </span>
    </div>

    );
  }
}

export default Nav;
