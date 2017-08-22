import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.linkPath = this.linkPath.bind(this);
    this.greeting = this.greeting.bind(this);
    this.question = this.question.bind(this);

  }

  // for handling input
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }


  // for conditionally dictating paths
  linkPath() { //function to dictate path of link behind form toggle button
    if (this.props.formType === '/signup') {
      return '/login';
    } else if (this.props.formType === '/login'){
      return '/signup';
    }
  }

  // for conditionally dictating UX
  greeting() {
    return this.linkPath() === '/login' ? 'Sign up for a fan account' : 'Log In';
  }

  question() {
    return this.linkPath() === '/login' ? "Don't have an account?" : "Already have an account?";
  }

  answer() {
    return this.linkPath() === '/login' ? "Sign up for a fan account." : "Log in.";
  }


  render() {

    const emailForm =
      (<label>Email
        <input onChange={this.handleChange('email')}/>
      </label>);



    return(
      <div className="session-box">
        <h3>{this.greeting()}</h3>



        <div className="session-form">
          <form onSubmit={ this.handleSubmit }>

            {this.props.formType === '/signup' ? emailForm : null}


            <label>Username
              <input onChange={this.handleChange('username')}/>
            </label>

            <label>Password
              <input type="password" onChange={this.handleChange('password')}/>
            </label>

            <button>{this.props.formType.slice(1)}</button>
          </form>

        </div>



        <div className="session-question">
          <h6>{this.question()}</h6>
          <Link to={this.linkPath()}>{this.answer()}</Link>

        </div>
      </div>
    );
  }
}

export default SessionForm;
