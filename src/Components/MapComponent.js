import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class MapComponent extends Component {
    render() {
        return (
            <div className='Content-Container'>
                <div className='Map-Container'>
                    <Map center={[39.299236, -76.609383]} zoom={12}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </Map>
                </div>
            </div>
        );
    }
}

export default MapComponent;