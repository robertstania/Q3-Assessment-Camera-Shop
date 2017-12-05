/*eslint-disable*/
import React from 'react';
import {addCamera} from '../actions/cameras'
import { Container, Row, Col, Card, CardBody, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CameraInput extends React.Component {

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
export default CameraInput;

// import { addCamera } from '../actions/cameras'
//
// import { bindActionCreators } from 'redux'
//
// import React from 'react'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import { connect } from 'react-redux'
//
//
// const CameraInput = (props) => {
//
//     let { id, title, rating, price, image, on_sale } = props.camera
//
//     let cameraList = props.cameras.map(camera => {
//       return (
//         <p key={camera.id}>
//           {camera.content}
//         </p>
//       )
//     })
//
//
//     handleSubmit = (e) => {
//       e.preventDefault()
//       this.props.addCamera({
//         camera_id: props.cameraId
//
//       })
//     }
//
//     return (
//       <div className="row">
//         <div className="col-md-offset-1">
//           <hr />
//           {cameraList}
//           <form className="form-inline" onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <input
//                 className="form-control"
//                 value={this.state.newCamera}
//                 onChange={(e) => this.setState({ newCamera: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <input type="submit" className="btn btn-primary" />
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
//
//   function mapStateToProps(state, props) {
//     return {
//       camera: state.cameras
//     }
//   }
// function mapDispatchToProps(dispatch) {
//   return {
//     addCamera: bindActionCreators(addCamera, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(CameraInput)
