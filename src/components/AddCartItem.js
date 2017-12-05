/* eslint-disable */
import React, { Component } from 'react'
import { addCamera } from '../actions/cameras'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CameraInput from '../components/CameraInput'
import Camera from '../components/Camera'
import { Container, Card, CardSubtitle, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddCartItem extends Component {
  state = {

    subtotal: 0,
    tax: 8.6,
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
       <Card onSubmit={this.handleSubmit}>
           <Label for="title">Your Cart</Label>
           <CardSubtitle>Camera Item{this.props.camera.title}</CardSubtitle>
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
             value={(this.state.tax /100).toFixed(2)}
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
       </Card>
     </Container>
    </div>
   )
 }
}

function mapStateToProps(state, props) {
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
