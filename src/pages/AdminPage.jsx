import React from 'react';
import LoginForm from '../components/LoginForm';
import RichEditorExample from './richExample';

import './richTextExample.css';

export default class AdminPage extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <LoginForm {...this.props} />
        <br></br>
        <RichEditorExample {...this.props} />
      </div>
    );
  }
}
