const post = [
  { id: 1, message: 'Hello', date: '24-06-2023', name: 'John' },
  { id: 2, message: 'Hi', date: '25-05-2023', name: 'Jane' },
  { id: 3, message: 'Hey', date: '26-04-2023', name: 'Joe' },
  { id: 4, message: 'OK', date: '27-03-2023', name: 'James' },
  { id: 5, message: 'Bye', date: '28-02-2023', name: 'Jim' },
];

function User(props) {
  return (
    <li>{`id: ${props.id} message: ${props.message} date:${props.date} name:${props.name}`}</li>
  );
}

function List() {
  return (
    <div className="container">
      <ul>
        {post.map((obj) => (
          <User
            key={obj.id}
            id={obj.id}
            message={obj.message}
            date={obj.date}
            name={obj.name}
          />
        ))}
      </ul>
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<List />);
