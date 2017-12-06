/*eslint-disable*/
import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Card, CardBody, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Cart from './Cart';
import Camera from './Camera'
import CameraList from './CameraList'
import CameraInput from './CameraInput'

import { updateTitleFilter } from '../actions/titleFilter'
import { updateSortType } from '../actions/sortCameras'


class Main extends Component {

  render () {
    return (
      <div className="container">
        <Form>
          <FormGroup>
            <label htmlFor="filter">Filter Items By:</label>
                <input
                  className="form-control"
                  id="filter"
                  placeholder="Camera Name"
                  onChange={(e) => this.props.updateTitleFilter(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <label htmlFor="sort">Sort By:</label>
              <select
                className="form-control"
                id="sort"
                onChange={(e) => this.props.updateSortType(e.target.value)}>
                <option value="title">Title</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
            </select>
        </FormGroup>
        <Container>
          <Row>
              <Col><CameraList /></Col>
              <Col><Cart/></Col>
          </Row>
        </Container>
      </Form>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitleFilter: bindActionCreators(updateTitleFilter, dispatch),
    updateSortType: bindActionCreators(updateSortType, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Main);
