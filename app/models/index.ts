export type ColumnForm = {
  title: string;
};

export type SortTask = {
  taskId: number;
  columnId: number;
  sourceIndex: number;
  destinationIndex: number;
};

export type ChangeColumn = {
  taskId: number;
  columnId: number;
  sourceIndex: number;
  destinationIndex: number;
  columnDestiny: number;
};
