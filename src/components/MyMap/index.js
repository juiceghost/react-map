import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../../index.css';

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* var LeafIcon = Leaflet.Icon.extend({
    options: {
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

var sunIcon = new LeafIcon({
    iconUrl: require('../src/marker-sun.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
}) */

const iconSun = new Leaflet.Icon({
    iconUrl: require('../../marker-sun.png'),
    iconRetinaUrl: require('../../marker-sun.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconAnchor: null,
    popupAnchor: null,
    //    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Leaflet.Point(30, 30),
    className: 'leaflet-div-icon'
});


class MyMap extends Component {
    state = {
        lat: 59.329323,
        lng: 18.068581,
        zoom: 13,
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[59.331856, 18.040596]} icon={iconSun} />
            </Map>
        );
    }
}

export default MyMap;
