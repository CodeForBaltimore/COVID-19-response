import React, { Component } from 'react';
import { Map, TileLayer } from "react-leaflet";
import { Container} from 'react-bootstrap';

class MapComponent extends Component {
    render() {
        return (
            <Container>
                <div className='Map-Container'>
                    <Map center={[39.299236, -76.609383]} zoom={12}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </Map>
                </div>
            </Container>
        );
    }
}

export default MapComponent;