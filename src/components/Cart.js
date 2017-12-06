/* eslint-disable */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Card, CardTitle, CardSubtitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import CartItem from './CartItem';

import Camera from '../components/Camera';
import CameraInput from '../components/CameraInput';

import { addCamera } from '../actions/cameras';
import { removeCamera } from '../actions/cameras';


const Cart = (props) => {
    let cameraItemsInCart = props.cart.map(i => <CartItem key={i.id} item={i} />)
    let subtotal = props.cart.reduce((t, i) => t + i.price, 0);
    let tax = (subtotal * .086).toFixed(2);
    let total = (subtotal + Number(tax)).toFixed(2);

    return (
      <div id="cart">
        <Container style={{marginTop: 30}}>
          <Card body inverse color="warning">
            <CardTitle>Your Cart</CardTitle>
            <CardTitle>{cameraItemsInCart}</CardTitle>
            <CardTitle>Subtotal: ${subtotal}</CardTitle>
            <CardTitle>Tax: ${tax}</CardTitle>
            <CardTitle>Total: ${total}</CardTitle>
            <Button
              color="primary">Checkout
            </Button>
          </Card>
        </Container>
      </div>
    )
}

function mapStateToProps(store, props) {
  return {
    cart: store.cameras.filter(c => c.in_cart)
  }
}

export default connect(mapStateToProps, null)(Cart)
