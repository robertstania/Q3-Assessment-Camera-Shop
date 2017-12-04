/*eslint-disable*/
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class CameraInput extends React.Component {
  render(){
    return (
      <div>
        <Card>
          <CardBody>
            <CardSubtitle>Title: {this.props.camera ? this.props.camera.title : ''}</CardSubtitle>
            <CardImg top width="100%" src={this.props.camera ? this.props.camera.image : ''} alt="Card image cap" />
            <CardSubtitle>Rating: {this.props.camera ? this.props.camera.make : ''}</CardSubtitle>
            <CardSubtitle>Price: {this.props.camera ? this.props.camera.price : ''}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default CameraInput;
