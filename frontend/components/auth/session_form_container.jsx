import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.location.pathname === '/login') {
    action = login;
  } else if (ownProps.location.pathname === '/signup') {
    action = signup;
  }
  return {
    processForm: (user) => dispatch(action(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
