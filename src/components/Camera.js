/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Cart from '../components/Cart';

import {addCamera} from '../actions/cameras'


class Camera extends React.Component {

  render(){
    return (
      <div>
        <Card>
          <CardBody>
            <Label for="title">Camera Name: </Label>
            <CardSubtitle>{this.props.camera ? this.props.camera.title : ''}</CardSubtitle>
            <CardImg top width="100%" src={this.props.camera ? this.props.camera.image : ''} alt="Card image cap" />
            <Label for="rating">Rating: </Label>
            <ReactStars
              name='camera-rating'
              placeholder="Rating"
              size={28}
              value={this.props.camera.rating}/>
            <Label for="price">Price:</Label>
            <CardSubtitle>${(this.props.camera ? this.props.camera.price : ''/100).toFixed(2)}</CardSubtitle>
            <CardSubtitle>{this.props.camera.on_sale? this.state.onsale : null}</CardSubtitle><br/>
            <Button
              onClick={this.handleAddCart}
              color="primary"
              >Add to Cart
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    camera: state.cameras.filter(camera => camera.id == props.match.params.cameras_id)[0]
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addCamera: bindActionCreators(addCamera, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Camera);
