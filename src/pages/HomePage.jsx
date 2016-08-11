import React from 'react';
import LoginForm from '../components/LoginForm';

export default class HomePage extends React.Component {
  render(){
    return(
      <div>
        Hello from React!!!
        <LoginForm />
      </div>
    );
  }
}
