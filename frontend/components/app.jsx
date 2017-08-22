import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './auth/session_form_container';

// import { AuthRoute } from '../util/route_util';
// TODO: make AuthRoute in util folder, after building session components

const App = () => {
  return (
    <div>
      <SessionFormContainer />
    </div>
  );
};

export default App;
