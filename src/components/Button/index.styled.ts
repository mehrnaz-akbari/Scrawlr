import styled from "styled-components";

export const StyledButton = styled.span`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #f4f6f8;
  cursor: pointer;
  &:focus,
  &:hover {
    background: #e5e8fd;
    svg {
      path {
        fill: #253cf2;
        stroke: #253cf2;
      }
    }
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
