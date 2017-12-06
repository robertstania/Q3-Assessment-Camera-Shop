/* eslint-disable */
import React, { Component } from 'react'
import ReactStars from 'react-stars';

import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';

import Camera from './Camera'
import CameraInput from './CameraInput'



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
