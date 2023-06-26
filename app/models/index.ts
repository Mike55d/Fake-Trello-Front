export type ColumnForm = {
  title: string;
};

export type SortTask = {
  taskId: number;
  columnId: number;
  sourceIndex: number;
  destinationIndex: number;
};
