import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container value={value}>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Value>{displayedValue}</Value>
      <IconWrapper style={{ "--size": "24px" }}>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </IconWrapper>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  margin-right: 12px;
  width: var(--size);
  height: var(--size);
  color: ${COLORS.gray700};
  pointer-events: none;
`;

const Value = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    colors: ${COLORS.black};
  }
`;
