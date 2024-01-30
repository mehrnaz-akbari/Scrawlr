// Types
import { SetStateAction, Dispatch } from "react";


export interface InitialState {
  rowList?: Row[];
  handleRowsList?: (type: "vote" | "add", rowNumber: number) => void;
  setRowList?: Dispatch<SetStateAction<Row[]>>;
}
export interface Row {
  key: number;
  upVoteList: number[];
}
