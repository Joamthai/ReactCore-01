// #1 Write Your Function Component
function Header() {
  return <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>;
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Header />);
