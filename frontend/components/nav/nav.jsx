import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthPage = this.isAuthPage.bind(this);
    this.authButtons = this.authButtons.bind(this);
  }

  isAuthPage() {
    return(
      this.props.pageType === '/login' || this.props.pageType === '/signup'
    );
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
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }
  }



  render() {
    const user = this.props.currentUser ? this.props.currentUser.username : undefined;
    return(

    <div className="nav-god">

      <h1>AUX</h1>
      <p className="nav-greeting">{user}</p>
      <span>{this.authButtons()}</span>


    </div>

    );
  }
}

export default Nav;
