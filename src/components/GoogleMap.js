import React from "react";
//Google Maps API
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const GMAP_KEY = process.env.REACT_APP_GMAP_KEY;

const mapStyles = {
    width: "25%",
    height: "25%",
    marginTop: "25px",
};

const GoogleMap = (props) => {
    return (
        <div style={{ width: "100px", height: "100px" }}>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 41.0149398,
                    lng: -73.6653936,
                }}
            >
                <Marker position={{ lat: 41.0149398, lng: -73.6653936 }} />
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: GMAP_KEY,
})(GoogleMap);
