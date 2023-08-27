// #1 React : CreateElement
const pEl = React.createElement(
  'p',
  { className: 'info-text' },
  'Build a beautiful, modern website with flexible components built from scratch.'
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(pEl);
