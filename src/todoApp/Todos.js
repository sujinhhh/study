export default function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((item) => {
      return (
        <div className="collection-item" key={item.id}>
          <span onClick={() => deleteTodo(item.id)}>{item.content}</span>
        </div>
      );
    })
  ) : (
    <p> Nothing left </p>
  );
  return <div className="todos collection">{todoList}</div>;
}
