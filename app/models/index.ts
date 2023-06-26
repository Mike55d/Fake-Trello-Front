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

export type CreateTask = {
  title: string;
  subtitle: string;
  text: string;
  columnId: number;
};
