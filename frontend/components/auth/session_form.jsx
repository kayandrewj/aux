import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.greeting = this.greeting.bind(this);
    this.question = this.question.bind(this);
    this.isArtist = this.isArtist.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = {};
    newState.artist_profile_attributes = {
      band: this.state.band,
    };
    newState.bio = this.state.bio;
    newState.username = this.state.username;
    newState.password = this.state.password;
    newState.email = this.state.email;
    const user = Object.assign(newState, this.isArtist());
    this.props.processForm(user);
  }

  isArtist() {
    if (this.props.formType === '/band') {
      return { is_artist: true};
    } else {
      return {};
    }
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  loginGuest() {
    const user = {username: "deafheaven", password: "password"};
    this.props.processForm(user);
  }

  greeting() {
    return this.props.formType !== '/login' ? 'Sign up' : 'Login';
  }

  question() {
    return this.props.formType === '/login' ? "Don't have an account?" : "Already have an account?";
  }

  answer() {
    if (this.props.formType === '/login') {
      return (<h6>
        Sign up for a
        <Link className="sign-up-prompt" to={'/signup'}>fan</Link>
        or
        <Link className="sign-up-prompt" to={'/band'}> artist </Link>
        account.
      </h6>);
    } else {
      return <h6><Link to={'/login'}>Log in.</Link></h6>;
    }
  }

  buttonText(){
    return this.props.formType === '/login' ? "Login" : "Sign Up";
  }

  handleErrors() {
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error">
            {error}
          </li>
        ))}
      </ul>

    );
  }

  render() {

    const bandForm =
      (<label className="band-input">Band
        <input onChange={this.handleChange('band')}/>
      </label>);

    const bioForm =
      (<label className="bio-input">Bio
        <input type="text" onChange={this.handleChange('bio')}/>
      </label>);

    const emailForm =
      (<label className="email-input">Email
        <input onChange={this.handleChange('email')}/>
      </label>);

    return(
      <div className="session-box">

        <div className="session-form">
          <p className="form-type">{this.greeting()}</p>
          <div className="error-box">{this.handleErrors()}</div>

          <div className="formdemobutton">

          <form onSubmit={ this.handleSubmit }>
            <label className="username-input">Username
              <input onChange={this.handleChange('username')}/>
            </label>

            {this.props.formType === '/login' ? null : emailForm}

            <label className="password-input">Password
              <input type="password" onChange={this.handleChange('password')}/>
            </label>

            {this.props.formType === '/band' ? bandForm : null}
            {this.props.formType === '/band' ? bioForm : null}

            <button>{this.buttonText()}</button>
          </form>

        </div>


        </div>

        <div className="session-question">

          {this.question()}
          {this.answer()}



          {this.greeting() === 'Login' ? <button className="demo-button" onClick={this.loginGuest}>Demo Login</button> : undefined}

        </div>
    </div>
    );
  }
}

export default SessionForm;
