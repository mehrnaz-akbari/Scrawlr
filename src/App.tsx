import { FC, useState } from "react";
// Contexts
import { ContextWrapper } from "./context";
// Common Components
import VoteRow from "./components/VoteRow";
// Helpers
import { renderList, readLocalStorage, setLocalStorage } from "./helpers";
//Types
import { Row } from "./types";
// Styles
import "./App.css";

const App: FC = () => {
  const rowsInfo: Record<number, number> = readLocalStorage("rowsInfo");

  const [rowList, setRowList] = useState<Row[]>([
    { key: 0, upVoteList: renderList(rowsInfo[0], 0) },
    { key: 1, upVoteList: renderList(rowsInfo[1], 1) },
    { key: 2, upVoteList: renderList(rowsInfo[2], 2) },
  ]);

  const saveToStorage = (rows: Row[]) => {
    const rowsInfo: Record<number, number> = {};
    rows.forEach(({ key, upVoteList }) => {
      rowsInfo[key] = upVoteList.length;
    });
    setLocalStorage("rowsInfo", rowsInfo);
  };
  
  const handleRowsList = (rowsInfo: Row[]): void => {
    setRowList(rowsInfo);
    saveToStorage(rowsInfo);
  };

  return (
    <ContextWrapper.Provider value={{ rowList, handleRowsList }}>
      <div className="card">
        {rowList.map((row) => (
          <VoteRow id={row.key} key={row.key} />
        ))}
      </div>
    </ContextWrapper.Provider>
  );
};

export default App;
