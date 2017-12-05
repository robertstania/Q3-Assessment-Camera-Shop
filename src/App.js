/* eslint-disable */
import React from 'react'
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';

import { getCamera } from './actions/cameras';
import TopNav from './components/TopNav';
import Main from './components/Main';
import CameraList from './components/CameraList';
import CameraInput from './components/CameraInput';
import Camera from './components/Camera';
import AddCartItem from './components/AddCartItem';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


class App extends React.Component {

  componentDidMount(){
    this.props.getCamera();
  }

  render() {
    return (
      <div className="App">
        <TopNav />
            <Router>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/cameras' component={Main} />
                <Route exact path='/cameras/new' component={AddCartItem} />
                <Route exact path='/cameras/:cameras_id' component={Camera} />
                <Route exact path='/cameras/:cameras_id/edit' component={AddCartItem} />
              </Switch>
            </Router>
          <Footer/>
        </div>
      );
    }
  }
function mapDispatchToProps(dispatch) {
  return {
    getCamera: bindActionCreators(getCamera, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
