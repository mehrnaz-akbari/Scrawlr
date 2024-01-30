import styled from "styled-components";

export const StyledButton = styled.button`
  width: 56px;
  min-width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #f4f6f8;
  outline: none;
  cursor: pointer;
  font-size: 0px;
  &:hover {
    background: #e5e8fd;
    border: none;
    svg {
      path {
        fill: #253cf2;
        stroke: #253cf2;
      }
    }
  }
  &:focus-visible {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    path {
      fill: #343a40;
      stroke: #343a40;
    }
  }
`;
