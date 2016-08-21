import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actions';
import Main from './Main';


function mapStateToProps(state){
  return {
    // currentUser: state.userState.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ReduxApp;
