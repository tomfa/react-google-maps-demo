import React, { useEffect, useState } from "react";

import { CornerButton } from "./Components/CornerButton";

import "./App.css";

import { MapComponent } from "./Components/GoogleMaps/MapComponent";
import { InfoDisplay } from "./Components/InfoBox/InfoDisplay";

import { initialLocation, initialZoom } from "./data/initialLocation";
import { steps } from "./data/steps";

const App = () => {
  const texts = steps.map(step => step.text);

  const [stepNumber, setStepNumber] = useState(0);
  const [location, setLocation] = useState(initialLocation);
  const [zoom, setZoom] = useState(initialZoom);

  const activateStep = n => {
    if (steps.length > n) {
      const step = steps[n];
      console.log(step)
      if (step.zoomLevel) {
        setZoom(step.zoomLevel);
      }
      if (step.mapCenter) {
        setLocation(step.mapCenter);
      }
    }
  };

  useEffect(() => activateStep(stepNumber), [stepNumber]);

  return (
    <div>
      <MapComponent location={location} zoom={zoom} />
      <InfoDisplay currentStep={stepNumber} steps={texts} />
      <CornerButton onClick={() => setStepNumber(stepNumber + 1)} />
    </div>
  );
};

export default App;
