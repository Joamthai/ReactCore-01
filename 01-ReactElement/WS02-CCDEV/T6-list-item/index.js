// #1 React : CreateElement
const aEl = React.createElement('a', { className: 'nav_menu_item' });
const liEl = React.createElement(
  'li',
  { className: 'nav_menu_link' },
  'Account'
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(liEl);
