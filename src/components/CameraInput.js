/*eslint-disable*/
import React from 'react';
import ReactStars from 'react-stars';
import {addCamera} from '../actions/cameras'
import PropTypes from 'prop-types';
import AddCartItem from '../components/AddCartItem';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CameraInput extends React.Component {
  state = {
    showInCart: false,
    onsale:"On Sale"
  }
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
            <CardSubtitle>${(this.props.camera ? this.props.camera.price : ''/100).toFixed(2)}</CardSubtitle><br/>
            <CardSubtitle>{this.props.camera.on_sale? this.state.onsale : null}</CardSubtitle><br/>
            <Button onClick={() => this.setState({showInCart: !this.props.camera.in_cart})}>Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default CameraInput;
