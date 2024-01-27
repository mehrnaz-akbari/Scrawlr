import styled from "styled-components";

export const StyledButton = styled.span`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #F4F6F8;
  cursor: pointer;
  &:focus,&:hover {
    background: #E5E8FD;
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
