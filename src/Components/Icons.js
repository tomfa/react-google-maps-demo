import React from "react";
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

  ${SVG}:hover & {
    animation: ${dash} 1.5s ease-in-out 1;
  }
`;

export const Spinner = ({ size = 40, color = "white" }) => (
  <SVG size={size}>
    <SpinnerSVGCircle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke={color}
    ></SpinnerSVGCircle>
  </SVG>
);
