import { FiTrash } from 'react-icons/fi';

import { ITodoComponentProps } from './types';

import * as Styles from './styles';

export function Todo(props: ITodoComponentProps) {
  return (
    <Styles.Container isCompleted={props.todo.isCompleted}>
      <div>
        <input
          type="checkbox"
          name={`todo${props.todo.id}`}
          id={`todo${props.todo.id}`}
          onChange={() => props.handleToggleTodo(props.todo)}
        />
        <label htmlFor={`todo${props.todo.id}`}>{props.todo.title}</label>
      </div>

      <button type="button" onClick={() => props.handleRemoveTodo(props.todo.id)}>
        <FiTrash />
      </button>
    </Styles.Container>
  );
}
