/*eslint-disable*/
import React, { Component } from 'react';
import Icon from 'react-icons-kit'

import { trash } from 'react-icons-kit/fa/trash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { removeCamera } from '../actions/cameras';

class CartItem extends Component {

  handleRemoveItem = () => {
    this.props.removeCamera(this.props.item.id)
  }

  render () {
    return (
      <div>
        <Card body inverse color="warning">
          <Row>
            <Col><CardTitle>{this.props.item.title}</CardTitle></Col>
            <Col><CardTitle><Icon icon={trash} onClick={this.handleRemoveItem}/></CardTitle></Col>
          </Row>
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeCamera: bindActionCreators(removeCamera, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
