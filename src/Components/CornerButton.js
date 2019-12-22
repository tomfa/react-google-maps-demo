import React  from "react";

import styled from "styled-components";
import { Spinner } from "./Icons";

const Wrapper = styled.span`
  position: fixed;
  right: 15px;
  padding: 0;
  bottom: 15px;
  z-index: 10;
  width: 40px;
  height: 40px;

  & > * {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const CornerButton = ({ onClick } = {}) => {
  return (
    <Wrapper onClick={onClick}>
      <Spinner />
    </Wrapper>
  );
};
