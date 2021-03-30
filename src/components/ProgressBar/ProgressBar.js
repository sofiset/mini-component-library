/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Background
      role="progressbar"
      size={size}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <Foreground value={value} size={size} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Background>
  );
};

export default ProgressBar;

const Background = styled.div`
  width: 200px;
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(props) => (props.size === "large" ? "4px" : "unset")};
  border-radius: 4px;
`;

const Foreground = styled.div`
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
  height: ${(props) => SIZES[props.size]};
  border-radius: ${(props) => (props.value === 100 ? "4px" : "4px 0 0 4px")};
`;

const SIZES = {
  small: "8px",
  medium: "12px",
  large: "16px",
};
