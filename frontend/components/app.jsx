import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './auth/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <div className='session-form-wrapper'>

        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
      </div>

    </div>
  );
};

export default App;
