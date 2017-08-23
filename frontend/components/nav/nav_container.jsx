import { connect } from 'react-redux';
import Nav from './nav';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    pageType: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
