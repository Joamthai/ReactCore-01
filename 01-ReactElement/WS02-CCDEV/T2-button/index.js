// #1 React : CreateElement
const btnEl1 = React.createElement(
  'button',
  { className: 'btn view_more_btn' },
  'view all pages'
);
const btnEl2 = React.createElement(
  'button',
  { className: 'btn documentation_btn' },
  'documentation'
);
const divEl = React.createElement(
  'div',
  {
    className: 'btn_wrapper',
  },
  [btnEl1, btnEl2]
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(divEl);
