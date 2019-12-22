import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

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
    zoom
  };
  const options = Object.assign({}, defaultOptions, props.options || {});
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (!map) {
      return;
    }
    map.panTo(props.panTo);
  }, [props.panTo]);

  return (
    <GoogleMap
      center={props.location}
      zoom={zoom}
      defaultOptions={options}
      ref={el => setMap(el)}
    >
      {props.markers.map((marker, i) => {
        if (marker.disabled) {
          return null;
        }
        const icon = {
          url:
            "http://maps.google.com/mapfiles/ms/" +
            `icons/${marker.color || "yellow"}-dot.png`
        };
        return (
          <Marker
            key={i}
            position={marker.location}
            icon={icon}
          />
        );
      })}
    </GoogleMap>
  );
});
