import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
}
`;

const dash = keyframes`
0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const SVG = styled.svg.attrs(props => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size,
  height: props.size,
  viewBox: "0 0 24 24"
}))`
  fill: ${props => props.fill};
  stroke: ${props => props.stroke};
  animation: ${rotate} 2s linear infinite;
`;

const SpinnerSVGCircle = styled.circle`
  stroke: hsl(210, 70, 75);
  stroke-linecap: round;

  animation: ${dash} 1.5s ease-in-out;
  animation-name: ${props => (props.spinning ? dash : "none")};
`;

export const Spinner = ({ size = 40, color = "white" }) => {
  const [activeTime, setActiveTime] = useState(null);
  const activeTimeRef = useRef(activeTime);
  activeTimeRef.current = activeTime;
  const spinningTime = 2000;
  const isSpinning = activeTime !== null;

  const deactivate = () => {
    const isAlreadyDeactivated = !activeTimeRef.current;
    if (isAlreadyDeactivated) {
      return;
    }
    const now = new Date();
    const newerDeactivateTaskLoaded =
      now - activeTimeRef.current < spinningTime;
    if (newerDeactivateTaskLoaded) {
      return;
    }
    setActiveTime(null);
  };
  const onClick = () => {
    setActiveTime(new Date());
    setTimeout(deactivate, spinningTime);
  };

  useEffect(onClick, []);

  return (
    <SVG size={size} onClick={onClick}>
      <SpinnerSVGCircle
        spinning={isSpinning}
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke={color}
      ></SpinnerSVGCircle>
    </SVG>
  );
};
