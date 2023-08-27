// #1 React : CreateElement
// img
const imgAtb = {
  src: 'https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04',
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
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(secEl);
