import React from "react";
import ReactDOM from "react-dom";
import 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import { ReactLeafletZoomIndicator } from 'react-leaflet-zoom-indicator'
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0,
            maxZoom:13,
            maxBounds:[[-90, -180], [90, 180]],
            bounds: [
              {
                lat: 33.100745405144245,
                lng: 24.510498046875,
              },
              {
                lat: 33.100745405144245,
                lng: 46.48315429687501,
              },
              {
                lat: 44.55916341529184,
                lng: 46.48315429687501,
              },
              {
                lat: 44.55916341529184,
                lng: 24.510498046875,
              },
            ],
          }
    }
    render (){
        return (
            <div>
                <Map 
                    className="simpleMap"
                    scrollWheelZoom={false}
                    bounds={this.state.bounds}
                    maxZoom={this.state.maxZoom}
                    maxBounds={this.state.maxBounds}>
                    <TileLayer noWrap={true} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <ReactLeafletZoomIndicator head='zoom:' position='topleft' />
                </Map>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));