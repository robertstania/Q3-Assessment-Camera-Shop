import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCamera } from '../actions/cameras';

class AddCartItem extends React.Component {
  state = {

    title: '',
    image: '',
    rating: '',
    price: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCamera(this.state)
    this.props.history.push('/cameras')
  }

  render () {
    return (
      <Container style={{marginTop: 30}}>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleTitle">Title</Label>
            <Input
              type="text"
              id="exampleTitle"
              value={this.state.title}
              onChange={(e) => this.setState({title: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePhotoUrl">Photo Url</Label>
            <Input
              type="text"
              id="examplePhotoUrl"
              value={this.state.photo_url}
              onChange={(e) => this.setState({photo_url: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleRating">Rating</Label>
            <Input
              type="text"
              id="exampleRating"
              value={this.state.rating}
              onChange={(e) => this.setState({rating: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePrice">Price</Label>
            <Input
              type="number"
              id="examplePrice"
              value={this.state.price}
              onChange={(e) => this.setState({price: e.target.value})}
            />
          </FormGroup>
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCamera: bindActionCreators(addCamera, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddCartItem);
