import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    debugger
    return(

    <div className="nav-god">
      <h1>AUX</h1>

      <div className="nav-buttons">
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Sign Up</Link>


      </div>
    </div>

  );
  }
}

export default Nav;
