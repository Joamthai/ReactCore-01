function Profile(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<Profile name="John Doe" age="27" />);
