import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// ...

export class MapContainer extends Component {
 
  render() {
    state = {
      google=this.props.google,
      center = this.props.defaultCenter,
    }
    return (
      <div>
        
        {console.log(this.props.defaultCenter)}
      </div>
    );
  }
}
const style = {
  width: "100%",
  height: "100%",
};
const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: "AIzaSyCpWxstLYuQy8MpkvME9AYV17Pz0MK44mc",
  LoadingContainer: LoadingContainer,
})(MapContainer);
<div style={{position: "absolute", width: "100%", height: "100%"}}>
  <div style={{position: "absolute", left: "0px", right: "0px", bottom: "0px", top: "0px", display: "inherit"}}></div></div>