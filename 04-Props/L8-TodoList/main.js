const tasks = [
  { task: 'Task 1', status: true },
  { task: 'Task 2', status: true },
];

function TodoList(props) {
  //   console.log(props);
  return (
    <div className="list">
      <label>{props.task}</label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="input_box">
        <input type="text"></input>
        <button>Add</button>
      </div>
      {tasks.map((obj) => (
        <TodoList task={obj.task} />
      ))}
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
