import { FormEvent, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TbClipboardText } from 'react-icons/tb';

import { ITodoProps } from 'components/todo/types';
import { Todo } from 'components/todo';

import * as Styles from './styles/pages/Home';

function App() {
  const [todos, setTodos] = useState<ITodoProps[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const concludedTodos = todos.filter((todo) => todo.isCompleted).length;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!newTodo) return;

    const formattedNewTodo = {
      id: todos.length + 1,
      title: newTodo,
      isCompleted: false
    };

    setTodos((prevState) => [...prevState, formattedNewTodo]);
    setNewTodo('');
  }

  function handleToggleTodo(todo: ITodoProps) {
    const updatedTodos = todos.map((currentTodo) => {
      if (currentTodo.id === todo.id) {
        return {
          ...currentTodo,
          isCompleted: !currentTodo.isCompleted
        };
      }

      return currentTodo;
    });

    setTodos(updatedTodos);
  }

  function handleRemoveTodo(todoId: number) {
    const filteredTodos = todos.filter((currentTodo) => currentTodo.id !== todoId);

    setTodos(filteredTodos);
  }

  return (
    <Styles.Container>
      <header>
        <img src="/logo.png" alt="Logo todo" />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            placeholder="Adicione uma nova tarefa"
          />

          <button type="submit">
            Criar <FiPlus size={18} />
          </button>
        </form>
      </header>

      <section className="todos">
        <div className="header">
          <p>
            Tarefas criadas <span>{todos.length}</span>
          </p>

          <p>
            Concluídas{' '}
            <span>
              {concludedTodos} de {todos.length}
            </span>
          </p>
        </div>

        <div className="todos-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleToggleTodo={handleToggleTodo}
              handleRemoveTodo={handleRemoveTodo}
            />
          ))}
        </div>

        {todos.length === 0 && (
          <div className="no-tasks-wrapper">
            <TbClipboardText size={56} />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </section>
    </Styles.Container>
  );
}

export default App;
