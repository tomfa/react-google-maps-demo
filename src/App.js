import React, { useEffect, useState } from "react";

import { CornerButton } from "./Components/CornerButton";

import "./App.css";

import { Map } from "./Components/GoogleMaps/Map";
import { InfoDisplay } from "./Components/InfoBox/InfoDisplay";

import { initialLocation, initialZoom } from "./data/initialLocation";
import { steps } from "./data/steps";

const App = () => {
  const texts = steps.map(step => step.text);

  const [stepNumber, setStepNumber] = useState(0);
  const [location, setLocation] = useState(initialLocation);
  const [zoom, setZoom] = useState(initialZoom);
  const [markers, setMarkers] = useState([]);

  const activateStep = n => {
    if (steps.length > n) {
      const step = steps[n];
      if (step.zoomLevel) {
        setZoom(step.zoomLevel);
      }
      if (step.mapCenter) {
        setLocation(step.mapCenter);
      }
      if (step.markers) {
        setMarkers([...markers, ...step.markers]);
      }
    }
  };

  useEffect(() => activateStep(stepNumber), [stepNumber]);

  return (
    <div>
      <Map
        location={location}
        zoom={zoom}
        markers={markers}
      />
      <InfoDisplay currentStep={stepNumber} steps={texts} />
      <CornerButton onClick={() => setStepNumber(stepNumber + 1)} />
    </div>
  );
};

export default App;
