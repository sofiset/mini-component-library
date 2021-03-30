import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: "16px",
    borderWidth: "1px",
    fontSize: "0.875rem",
    height: "24px",
  },
  large: {
    iconSize: "24px",
    borderWidth: "2px",
    fontSize: "1.125rem",
    height: "36px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize }}>
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>
      <FancyInput
        label={label}
        placeholder={placeholder}
        style={{
          "--fontSize": styles.fontSize,
          "--borderWidth": styles.borderWidth,
          "--width": width + "px",
          "--height": styles.height,
          "--padding": styles.height,
        }}
      />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`;

const FancyInput = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid black;
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  padding-left: var(--height);
  outline-offset: 2px;
  width: var(--width);
  height: var(--height);
`;
