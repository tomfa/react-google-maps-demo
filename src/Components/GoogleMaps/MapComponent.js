import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const defaultStyles = require("./styles.json");

export const MapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQdayjPFPUGwZauhSZzOH5iFZpGbUZKyw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const zoom = props.zoom || 12;
  const defaultOptions = {
    styles: defaultStyles,
    disableDefaultUI: true,
    zoom,
    minZoom: zoom,
    maxZoom: zoom
  };
  const options = Object.assign({}, defaultOptions, props.options || {});

  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.location}
      defaultOptions={options}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} label="OST" />
      )}
    </GoogleMap>
  );
});
