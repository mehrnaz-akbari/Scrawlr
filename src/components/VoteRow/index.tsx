import { FC, useContext } from "react";
// Context
import { ContextWrapper } from "../../context";
// Common Coponents
import IconButton from "../IconButton";
// Styles
import { StyledContainer, StyledRow } from "./index.styled";

interface Props {
  id: number;
}
const VoteRow: FC<Props> = (props) => {
  const { id } = props;
  const { rowList, handleRowsList } = useContext(ContextWrapper);
  const handleClick = (): void => {
    handleRowsList?.("vote", id);
  };

  const handleAdd = (): void => {
    handleRowsList?.("add", id);
  };
  return (
    <StyledContainer data-testid={`main-row-${id}`}>
      <StyledRow data-testid={`row-${id}`}>
        {rowList?.[id]?.upVoteList.map((item) => (
          <IconButton
            icon="up"
            key={`vote-${item}-${id}`}
            testId={`vote-${item}-${id}`}
            onClick={handleClick}
          />
        ))}
      </StyledRow>
      <IconButton icon="plus" testId={`add-${id}`} onClick={handleAdd} size={38} />
    </StyledContainer>
  );
};

export default VoteRow;
