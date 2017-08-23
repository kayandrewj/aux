import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/session_form_container';
import Nav from './nav/nav'

const App = () => {
  return (
    <div>
      <div className='session-form-wrapper'>

        <Route path="/" component={Nav} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
      </div>

    </div>
  );
};

export default App;
