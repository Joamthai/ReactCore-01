const detail = [
  { text: 'Happy new year', user: 'John', date: '1/1/2021 00.01 AM' },
  { text: 'Programming', user: 'Jack', date: '30/6/2021 10.23 AM' },
  { text: 'Oh Amazing', user: 'Sarah', date: '23/7/2021 08.17 PM' },
];

function Comment(props) {
  return (
    <div className="comment">
      <h4>{props.text}</h4>
      <p>Author:{props.user}</p>
      <p>{props.date}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {detail.map((obj) => (
        <Comment text={obj.text} user={obj.user} date={obj.date} />
      ))}
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
