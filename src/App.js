import React, { useState } from "react";

import { CornerButton } from "./Components/CornerButton";

import "./App.css";

import { MapComponent } from "./Components/GoogleMaps/MapComponent";
import { InfoDisplay } from "./Components/InfoBox/InfoDisplay";

import { initialLocation, initialZoom } from "./data/initialLocation";
import { steps } from "./data/steps";

const App = () => {
  const [step, setStep] = useState(0);
  const texts = steps.map(step => step.text);

  return (
    <div>
      <MapComponent location={initialLocation} zoom={initialZoom} />
      <InfoDisplay currentStep={step} steps={texts} />
      <CornerButton onClick={() => setStep(step+1)} />
    </div>
  );
};

export default App;
