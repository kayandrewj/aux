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


  // for conditionally dictating UX
  greeting() {
    return this.props.formType !== '/login' ? 'Sign up for a fan account' : 'Log In';
  }

  question() {
    return this.props.formType === '/login' ? "Don't have an account?" : "Already have an account?";
  }

  answer() {
    return this.props.formType === '/login' ? "Sign up for a fan account." : "Log in.";
  }


  render() {

    const emailForm =
      (<label>Email
        <input onChange={this.handleChange('email')}/>
      </label>);



    return(
      <div className="session-box">
        <div className="login-header">
          <h1>AUX</h1>
        </div>




        <div className="session-form">
          <h3>{this.greeting()}</h3>
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
          <Link to={this.props.formType === '/login' ? '/signup' : '/login'}>{this.answer()}</Link>

        </div>
      </div>
    );
  }
}

export default SessionForm;
