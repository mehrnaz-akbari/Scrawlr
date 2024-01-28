
export interface InitialState {
  rowList?: Row[];
  handleRowsList?: (rows:Row[]) =>void ;
}
export interface Row {
  key: number;
  upVoteList: number[];
}
