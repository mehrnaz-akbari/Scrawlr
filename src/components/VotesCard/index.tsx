import { useContext, useEffect, FC } from "react";
// Helpers
import { renderList, readLocalStorage } from "../../helpers";
import { ContextWrapper } from "../../context";
// Common Coponents
import VoteRow from "../VoteRow";
// Styles
import { StyledCard } from "./index.styled";

const VotesCard: FC = () => {
  const rowsInfo: Record<number, number> = readLocalStorage("rowsInfo");

  const { rowList, setRowList } = useContext(ContextWrapper);
  
  useEffect(() => {
    const list = [0, 1, 2].map((id) => ({
      key: id,
      upVoteList: renderList(rowsInfo[id], id),
    }));
    setRowList?.(list);
  }, []);

  return (
    <StyledCard>
      {rowList?.map((row) => (
        <VoteRow id={row.key} key={row.key} />
      ))}
    </StyledCard>
  );
};

export default VotesCard;
