import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import { Marker } from "./Marker";
import { apiKey, defaultOptions } from "./config";

const MapComponent = ({ zoom = 12, location, markers } = {}) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (!map) {
      return;
    }
    map.panTo(location);
  }, [location]);

  return (
    <GoogleMap
      center={location}
      zoom={zoom}
      defaultOptions={defaultOptions}
      ref={el => setMap(el)}
    >
      {markers.map((marker, i) => (
        <Marker
          key={i}
          location={marker.location}
          color={marker.color}
          description={marker.label}
          disabled={marker.disabled}
        />
      ))}
    </GoogleMap>
  );
};

export const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />
  }),
  withScriptjs,
  withGoogleMap
)(MapComponent);
