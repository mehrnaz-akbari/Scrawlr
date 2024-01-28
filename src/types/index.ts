import { Dispatch, SetStateAction } from "react";

export interface InitialState {
  rowList?: Row[];
  setRowList?: Dispatch<SetStateAction<Row[]>>;
}
export interface Row {
  key: number;
  upVoteList: number[];
}
