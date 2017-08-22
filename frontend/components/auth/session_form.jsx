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
    this.buttonText = this.buttonText.bind(this);

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
    return this.props.formType !== '/login' ? 'Sign up' : 'Login';
  }

  question() {
    return this.props.formType === '/login' ? "Don't have an account?" : "Already have an account?";
  }

  answer() {
    return this.props.formType === '/login' ? "Sign up for a fan account." : "Log in.";
  }

  buttonText(){
    return this.props.formType === '/login' ? "Login" : "Sign Up";
  }


  render() {

    const emailForm =
      (<label>
        <input placeholder="Email" onChange={this.handleChange('email')}/>
      </label>);



    return(
      <div className="session-box">
        <div className="login-header">
          <h1>AUX</h1>
        </div>



        <div className="session-box">
        <div className="session-form">
          <p className="form-type">{this.greeting()}</p>
          <form onSubmit={ this.handleSubmit }>

            {this.props.formType === '/signup' ? emailForm : null}


            <label>
              <input placeholder="Username" onChange={this.handleChange('username')}/>
            </label>

            <label>
              <input type="password" placeholder="Password" onChange={this.handleChange('password')}/>
            </label>

            <button>{this.buttonText()}</button>
          </form>

        </div>



        <div className="session-question">
          <h6>{this.question()}</h6>
          <Link to={this.props.formType === '/login' ? '/signup' : '/login'}>{this.answer()}</Link>

        </div>
      </div>
    </div>
    );
  }
}

export default SessionForm;
