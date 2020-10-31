import './styles.scss';
import React, { Component } from 'react';
import FormInput from '../form-input';
import Button from '../button';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

export default class SignUpForm extends Component {
  state = { displayName: '', email: '', password: '', confirmPassword: '' };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // Form validation goes here
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    //
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });

      // Reset fields
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('Error signing up', error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="name"
            name="displayName"
            type="text"
            value={displayName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="email"
            name="email"
            type="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            type="password"
            value={password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}
