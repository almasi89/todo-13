const Todos = ({ todos, onToggleComplete, onDeleteTodo }) => {
    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.title}</span>
            <button 
              onClick={() => onDeleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };