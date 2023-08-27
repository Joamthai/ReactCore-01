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
const h2El = React.createElement('h2', null, 'CodeCamp');
const div1El = React.createElement('div', { className: 'logo' }, h2El);
const div2El = React.createElement(
  'div',
  { className: 'nav_menu', id: 'nav_menu' },
  ulEl
);

const navEl = React.createElement('nav', { className: 'nav' }, [
  div1El,
  div2El,
]);

const headerEl = React.createElement(
  'header',
  { className: 'container header' },
  navEl
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(headerEl);
