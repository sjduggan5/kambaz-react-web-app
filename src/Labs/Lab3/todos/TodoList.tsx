import TodoItem from './TodoItem';
import todos from './todos.json';
export default function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
      <hr />
    </>
  );
}
