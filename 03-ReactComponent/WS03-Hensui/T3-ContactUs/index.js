// #1 Write Your Function Component
function ContactUS() {
  return (
    <form>
      <input className="text" type="text" placeholder="e-mail"></input>
      <input className="submit" type="submit"></input>
    </form>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<ContactUS />);
