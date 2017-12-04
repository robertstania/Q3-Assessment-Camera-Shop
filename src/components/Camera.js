/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Camera extends React.Component {
  render(){

    return (
      <div>
        <Card>
          <CardBody>
            <CardSubtitle>Title: {this.props.camera ? this.props.camera.title : ''}</CardSubtitle>
            <CardImg top width="100%" src={this.props.camera ? this.props.camera.image : ''} alt="Card image cap" />
            <CardSubtitle>Rating: {this.props.camera ? this.props.camera.rating : ''}</CardSubtitle>
            <CardSubtitle>Price: {this.props.camera ? this.props.camera.price : ''}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
    console.log('camera props:', props.camera)
  return {
    camera: state.cameras.filter(camera => camera.id == props.camera.id)[0]
  }
}
export default connect(mapStateToProps, null)(Camera);
