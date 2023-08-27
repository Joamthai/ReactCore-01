// #1 React : CreateElement
// task 8
const aAtb = {
  href: '#',
  className: 'nav_menu_link',
};
const aEl = (text) => React.createElement('a', aAtb, text);
const liEl = (text) =>
  React.createElement('li', { className: 'nav_menu_item' }, aEl(text));
const ulEl = React.createElement(
  'ul',
  { className: 'nav_menu_list' },
  liEl('Account'),
  liEl('About'),
  liEl('Service'),
  liEl('Contact')
);
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

// task 9
// img
const imgAtb = {
  src: 'https://i.ibb.co/mhcL2P6/image.png',
  alt: 'team-photo',
};
const imgEl = React.createElement('img', imgAtb);
const divEl = React.createElement(
  'div',
  { className: 'team_img_wrapper' },
  imgEl
);
const divDiv4El = React.createElement(
  'section',
  { className: 'grid-item-2' },
  divEl
);

// HEADING
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
// Info
const pEl = React.createElement(
  'p',
  { className: 'info-text' },
  'Build a beautiful, modern website with flexible components built from scratch.'
);
// BTN
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
const divBtnEl = React.createElement(
  'div',
  {
    className: 'btn_wrapper',
  },
  [btnEl1, btnEl2]
);
//

const divDiv3El = React.createElement('div', { className: 'grid-item-1' }, [
  h1El,
  pEl,
  divBtnEl,
]);

const divDiv2El = React.createElement('div', { className: 'grid-cols-2' }, [
  divDiv3El,
  divDiv4El,
]);
const divDiv1El = React.createElement(
  'div',
  { className: 'container' },
  divDiv2El
);
const secEl = React.createElement(
  'section',
  { className: 'wrapper' },
  divDiv1El
);
const fullDiv = React.createElement('div', null, [headerEl, secEl]);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(fullDiv);
