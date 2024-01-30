import { ReactNode, createContext, useState } from "react";
// Types
import { InitialState, Row } from "../types";
// Helpers
import { setLocalStorage } from "../helpers";

export const ContextWrapper = createContext<InitialState>({});
interface Props {
  children: ReactNode;
}
export const ContextProvider = ({ children }: Props) => {
  const [rowList, setRowList] = useState<Row[]>([]);

  const saveToStorage = (rows: Row[]) => {
    const rowsInfo: Record<number, number> = {};
    rows.forEach(({ key, upVoteList }) => {
      rowsInfo[key] = upVoteList.length;
    });
    setLocalStorage("rowsInfo", rowsInfo);
  };

  const handleRowsList = (type: "vote" | "add", rowNumber: number): void => {
    let list = [];
    if (type === "add") {
      const newIpVoteList = rowList;
      newIpVoteList[rowNumber]?.upVoteList.push(rowNumber);
      list = [...rowList];
    } else {
      const newIpVoteList = rowList;
      newIpVoteList[rowNumber]?.upVoteList.pop();
      newIpVoteList[rowNumber - 1]?.upVoteList.push(rowNumber - 1);
      list = [...rowList];
    }
    setRowList(list);
    saveToStorage(list);
  };

  return (
    <ContextWrapper.Provider value={{ rowList, handleRowsList, setRowList }}>
      {children}
    </ContextWrapper.Provider>
  );
};
