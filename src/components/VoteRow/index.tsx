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
    if (rowList) {
      const newIpVoteList = rowList;
      newIpVoteList[id].upVoteList.pop();
      newIpVoteList[id - 1]?.upVoteList.push(id - 1);
      handleRowsList?.([...rowList]);
    }
  };

  const handleAdd = (): void => {
    if (rowList) {
      const newIpVoteList = rowList;
      newIpVoteList[id].upVoteList.push(id);
      handleRowsList?.([...rowList]);
    }
  };
  return (
    <StyledContainer>
      <StyledRow>
        {rowList?.[id]?.upVoteList.map((item) => (
          <IconButton icon="up" key={`vote-${item}-${id}`} onClick={handleClick} />
        ))}
      </StyledRow>
      <IconButton icon="plus" onClick={handleAdd} size={38} />
    </StyledContainer>
  );
};

export default VoteRow;
