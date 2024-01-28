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
  const { rowList, setRowList } = useContext(ContextWrapper);
  const handleClick = (): void => {};

  const handleAdd = (): void => {
    if (rowList) {
      const newIpVoteList = rowList;
      newIpVoteList[id].upVoteList.push(id);
      setRowList?.([...rowList]);
    }
  };
  return (
    <StyledContainer>
      <StyledRow>
        {rowList?.[id]?.upVoteList.map((item) => (
          <IconButton icon="up" key={item} onClick={handleClick} />
        ))}
      </StyledRow>
      <IconButton icon="plus" onClick={handleAdd} size={38} />
    </StyledContainer>
  );
};

export default VoteRow;
