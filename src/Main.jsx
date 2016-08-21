import React from 'react';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';

import './styles/main.sass';

export default class Main extends React.Component {

  render(){
    return(
      <div>
        <Navbar />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}
