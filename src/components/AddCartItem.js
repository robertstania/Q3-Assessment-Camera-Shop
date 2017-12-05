/* eslint-disable */
import React, { Component } from 'react'
import { addCamera } from '../actions/cameras'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Camera from '../components/Camera'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddCartItem extends Component {
  state = {

    title: '',
    subtotal: 0,
    tax: 0,
    total: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCamera(this.state)
    this.props.history.push('/cameras')
  }

  render () {
    return (
    <div >
      <Container style={{marginTop: 30}}>
       <Form onSubmit={this.handleSubmit}>
         <FormGroup>
           <Label for="title">Your Cart</Label>
           <Input
             type="text"
             id="title"
             value={this.state.title}
             onChange={(e) => this.setState({title: e.target.value})}
           />
         </FormGroup>
         <FormGroup>
           <Label for="subtotal">Subtotal</Label>
           <Input
             type="number"
             id="subtotal"
             value={this.state.subtotal}
             onChange={(e) => this.setState({subtotal: e.target.value})}
           />
         </FormGroup>
         <FormGroup>
           <Label for="tax">Tax</Label>
           <Input
             type="number"
             id="tax"
             value={this.state.tax}
             onChange={(e) => this.setState({tax: e.target.value})}
           />
         </FormGroup>
         <FormGroup>
           <Label for="total">Total</Label>
           <Input
             type="number"
             id="total"
             value={this.state.total}
             onChange={(e) => this.setState({total: e.target.value})}
           />
         </FormGroup>
         <Button color="primary" type="submit">Checkout</Button>
       </Form>
     </Container>
    </div>
   )
 }
}

function mapStateToProps(state, props) {
    console.log(' props in add cart item : ', this.state)
  return {
    camera: state.cameras
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCamera: bindActionCreators(addCamera, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCartItem)
