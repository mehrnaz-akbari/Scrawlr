import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledRow = styled.div`
  width: calc(100% - 120px);
  border-radius: 8px;
  border: 1px solid #e5e8fd;
  display: flex;
  align-items: center;
  height: 100px;
  > span {
    margin: 0 8px;
  }
`;
