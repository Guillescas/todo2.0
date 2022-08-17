export interface ITodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ITodoComponentProps {
  todo: ITodoProps;
  handleToggleTodo: (todo: ITodoProps) => void;
  handleRemoveTodo: (todoId: number) => void;
}

export interface IContainerProps {
  isCompleted: boolean;
}
