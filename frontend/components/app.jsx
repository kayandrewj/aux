import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/session_form_container';
import NavContainer from './nav/nav_container'

const App = () => {
  return (
    <div>
      <div className='session-form-wrapper'>


        <Route path="/" component={NavContainer} />
        <Route path="/" component={NavContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
      </div>

    </div>
  );
};

export default App;
