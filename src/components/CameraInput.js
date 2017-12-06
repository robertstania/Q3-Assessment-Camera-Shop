/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Cart from '../components/Cart';

import Camera from './Camera'

import {addCamera} from '../actions/cameras'



const CameraInput = (props) => {
  console.log('camera input:', props.cameras)
  console.log('props', props)

  let onsale = "On Sale";

  this.handleAddItem = () => {
    props.addCamera(props.camera.id)
  }

  return (
    <div>
      <Card>
        <CardBody>
          <Label for="title">Camera Name: </Label>
          <CardSubtitle>{props.camera ? props.camera.title : ''}</CardSubtitle>
          <CardImg top width="100%" src={props.camera ? props.camera.image : ''} alt="Card image cap" />
          <Label for="rating">Rating: </Label>
          <ReactStars
            name='camera-rating'
            placeholder="Rating"
            size={28}
            value={props.camera.rating}/>
          <Label for="price">Price:</Label>
          <CardSubtitle>${(props.camera ? props.camera.price : ''/100).toFixed(2)}</CardSubtitle><br/>
          <CardSubtitle>{props.camera.on_sale? onsale : null}</CardSubtitle><br/>
            <Button
          onClick={this.handleAddItem}
          color="primary"
          >Add to Cart</Button>

        </CardBody>
      </Card>
    </div>
    )
  }
function mapDispatchToProps(dispatch) {
  return {
    addCamera: bindActionCreators(addCamera, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(CameraInput);
