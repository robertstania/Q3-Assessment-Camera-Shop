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
            <CardImg top width="100%" src={this.props.camera ? this.props.camera.image : ''} alt="Card image cap" />
            <CardSubtitle>ID: {this.props.camera ? this.props.camera.id : ''}</CardSubtitle>
            <CardSubtitle>Title: {this.props.camera ? this.props.camera.title : ''}</CardSubtitle>
            <CardSubtitle>Rating: {this.props.camera ? this.props.camera.rating : ''}</CardSubtitle>
            <CardSubtitle>Price: {this.props.camera ? this.props.camera.price : ''}</CardSubtitle>
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
export default connect(mapStateToProps, null)(Camera);


{/*<div>
  <i className="button"></i>
    <a>
      {this.props.camera.length} {this.props.camera.length === 1 ? 'camera' : 'cameras'}
    </a>
</div>
  <CameraInput cameras={this.props.camera} cameraId={id}/> */}
