import React from 'react';
import './styles.scss';
import SignInForm from '../../components/sign-in-form';
import SignUpForm from '../../components/sign-up-form';

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
