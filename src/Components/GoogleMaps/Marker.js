import React, { useState } from "react";
import { Marker as MapMarker, InfoWindow } from "react-google-maps";

export const Marker = ({
  color = "yellow",
  disabled,
  description,
  location
} = {}) => {
  const [isOpen, setOpen] = useState(false);
  const onClick = () => setOpen(!isOpen);

  if (disabled) {
    return null;
  }
  const icon = {
    url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`
  };
  return (
    <>
      <MapMarker position={location} icon={icon} onClick={onClick}>
        {isOpen && (
          <InfoWindow onCloseClick={onClick}>
            <>{description}</>
          </InfoWindow>
        )}
      </MapMarker>
    </>
  );
};
