// #1 React : CreateElement
const aAtb = {
  href: '#',
  className: 'nav_menu_link',
  style: { margin: '10px' },
};
const aEl = (text) => React.createElement('a', aAtb, text);
const liEl = React.createElement('li', { className: 'nav_menu_item' }, [
  aEl('account'),
  aEl('about'),
  aEl('service'),
  aEl('contact'),
]);
const ulEl = React.createElement('ul', { className: 'nav_menu_list' }, liEl);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(ulEl);
