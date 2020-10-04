import React, { Component } from 'react'
import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

class MyMap extends Component {
  state = {
    lat: 59.354810,
    lng: 18.075763,
    zoom: 13,
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
      });
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    return (
      this.props.markers ?
        <Map
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          style={{ margin: '50px auto', width: '80%', height: '600px' }}
        >
          <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          </Marker>
        </Map>
        :
        'Data is loading...'
    )
  }
}
export default MyMap;
