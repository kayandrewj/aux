import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthPage = this.isAuthPage.bind(this);
    this.authButtons = this.authButtons.bind(this);
    this.usersName = this.usersName.bind(this);
    this.usersId = this.usersId.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      query: '',
    };
  }

  isAuthPage() {
    const pageType = this.props.pageType;
    return(
      pageType === '/login' || pageType === '/signup' || pageType === '/band'
    );
  }

  usersName() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }

  usersId() {
    return this.props.currentUser ? this.props.currentUser.id : undefined;
  }

  authButtons() {
     if (!this.isAuthPage() && !this.props.loggedIn) {
      return(
        <span className='nav-links'>
          <div className='nav-link-box'>
            <Link to={'/login'}>Login</Link>
          </div>

          <div className='nav-link-box'>
            <Link to={'/signup'}>Sign Up</Link>
          </div>
        </span>
      );
    } else {
      return(
        <span className='nav-links'>
          <div className='nav-link-box'>
            <Link to={`/profile/${this.usersId()}`} className="nav-greeting">{this.usersName()}</Link>
          </div>
          <div className='nav-link-box'>
            <button className="log-out" onClick={this.props.logout}>Log out</button>
          </div>
        </span>
      );
    }
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.sendSearch(this.state.query).then(
      (action) => {
        return this.props.history.push(`/results/${this.state.query}`);
      }
    );
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return(
      <div className="nav-god">
        <div className="menu-bar">
          <h1>
            <Link to={'/'} className="logo">AUX</Link>
          </h1>

          {this.isAuthPage() ? undefined :
            <form
              className="nav-search"
              onChange={this.handleChange('query')}
              onSubmit={this.handleSearch}>

              <input
                className="search-input"
                placeholder="search AUX"/>

            </form>
          }

          <div className="nav-button">
            {this.authButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
