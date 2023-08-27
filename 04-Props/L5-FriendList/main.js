const friends = ['John', 'Jane', 'Joe', 'James'];

// const list = friends.map((name) => <div>{name}</div>);

function List() {
  //   return <div className="container">{list}</div>;
  return (
    <div className="container">
      {friends.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<List />);
