/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CameraInput from './CameraInput'
import { Container, Row, Col } from 'reactstrap';
import ReactStars from 'react-stars';

class CameraList extends Component {
  render () {

    function sortByPriceOrRating(a, b, type) {
      return a[type] - b[type];
    }

    function sortByTitle(a, b) {
      return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
    }

    let containerMargin = { marginTop: '35px' }

    let listOfCameras = this.props.camera
      .filter(camera => camera.title.includes(this.props.titleFilter))
      .sort((this.props.sortCameras === 'title' ? sortByTitle : ''))
      .map(camera => <CameraInput key={camera.id} camera={camera} />)

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
    camera: state.cameras,
    titleFilter: state.titleFilter,
    sortCameras: state.sortCameras
  }
}

export default connect(mapStateToProps, null)(CameraList)



{/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CameraInput from './CameraInput';
import ReactStars from 'react-stars';

class CameraList extends Component {
  render () {
    let containerMargin = { marginTop: '35px' }
    let listOfCameras= this.props.cameras.map(camera => {
      return (
        <Col key={camera.id} md={4}>
          <CameraInput camera={camera} />
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

export default connect(mapStateToProps, null)(CameraList); */}
