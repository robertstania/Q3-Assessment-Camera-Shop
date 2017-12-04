/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Camera from './Camera';

class CameraList extends Component {
  render () {
    let containerMargin = { marginTop: '35px' }
    let listOfCameras= this.props.cameras.map(camera => {
      return (
        <Col key={camera.id} md={4}>
          <Camera camera={camera} />
        </Col>
      )
    })
    return (
      <Container style={containerMargin}>
        <Col>
          {listOfCameras}
        </Col>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps, null)(CameraList);
