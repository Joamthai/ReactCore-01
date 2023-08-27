// #1 React : CreateElement
const brEl = React.createElement('br');
const spanEl = React.createElement('span', null, 'CodeCamp');
const h1El = React.createElement(
  'h1',
  { className: 'main-heading' },
  'Welcome to ',
  spanEl,
  brEl,
  'Develop anything.'
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(h1El);
