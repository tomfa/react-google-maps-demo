import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InfoDisplayDiv = styled.div`
  width: 100%;
  min-height: 70px;
  max-height: 100px;
  overflow: scroll;
  position: fixed;
  left: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.6rem;
  padding-right: 70px;
`;

const CurrentMessage = styled.p`
  color: white;
  text-align: center;
  margin: 0;
  padding: 5px 0 10px;
`;
const OldMessage = styled(CurrentMessage)`
  opacity: 0.4;
  padding: 5px 0;
`;

export const InfoDisplay = ({ currentStep, steps } = {}) => {
  const displayIndex = Math.min(currentStep, steps.length - 1);
  const currentMessage = steps[displayIndex];
  const oldMessages = steps.slice(0, displayIndex);
  const [messageEnd, setMessageEnd] = useState(null);

  useEffect(() => {
    if (messageEnd) {
      messageEnd.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMessage]);

  return (
    <InfoDisplayDiv>
      {oldMessages.map((message, i) => (
        <OldMessage key={i}>{message}</OldMessage>
      ))}
      <CurrentMessage ref={el => setMessageEnd(el)}>
        {currentMessage}
      </CurrentMessage>
    </InfoDisplayDiv>
  );
};
