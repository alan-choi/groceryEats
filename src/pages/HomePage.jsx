import React from 'react';
import LoginForm from '../components/LoginForm';

import '../common/main.sass';

export default class HomePage extends React.Component {
  render(){
    return(
      <div>
        Hello from React!
        <LoginForm />
      </div>
    );
  }
}
