import { FC, useState } from "react";
import { ContextWrapper } from "./context";
// Common Components
import VoteRow from "./components/VoteRow";
//Types
import { Row } from "./types";
// Styles
import "./App.css";

const App: FC = () => {
  const [rowList, setRowList] = useState<Row[]>([
    { key: 0, upVoteList: [0,0,0] },
    { key: 1, upVoteList: [1,1,1] },
    { key: 2, upVoteList: [2,2] },
  ]);

  return (
    <ContextWrapper.Provider value={{ rowList, setRowList }}>
      <div className="card">
        {rowList.map((row) => (
          <VoteRow id={row.key} key={row.key} />
        ))}
      </div>
    </ContextWrapper.Provider>
  );
};

export default App;
