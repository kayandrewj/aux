import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default withRouter(connect(mapStateToProps)(Profile));
