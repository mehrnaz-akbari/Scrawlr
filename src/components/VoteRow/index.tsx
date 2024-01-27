import { FC, useState } from "react";
// Common Coponents
import IconButton from "../IconButton";
// Styles
import { StyledContainer, StyledRow } from "./index.styled";

interface Props {
  upVote: () => void;
}
const VoteRow: FC<Props> = (props) => {
  const { upVote } = props;
  const [list, setList] = useState<number[]>([]);
  const handleClick = (): void => {
    upVote();
    
  };
  const handleAdd = (): void => {
    const newNumber = list[length - 1] + 1;
    const currentList = [...list];
    currentList.push(newNumber);
    setList(currentList);
  };
  return (
    <StyledContainer>
      <StyledRow>
        {list.map((item) => (
          <IconButton icon="up" key={item} onClick={handleClick} />
        ))}
      </StyledRow>
      <IconButton icon="plus" onClick={handleAdd} size={38} />
    </StyledContainer>
  );
};

export default VoteRow;
