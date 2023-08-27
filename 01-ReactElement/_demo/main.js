console.log('Learn React');

// ####### VANILLA JS (DOM API) #######
// Create Element
// const btn = document.createElement('button');
// console.dir(btn);
// btn.innerText = 'cart';
// btn.classList = 'red';

// let count = 0;
// for (let key in btn) {
//   count++;
// }
// console.log(count); // 337

// Render
// const root = document.getElementById('root');
// root.appendChild(btn);

// ############## REACT ##############
// React === Global Object (via CDN Link)

// console.log(React);

// React : Create React Element
const reactElement = React.createElement(
  'button',
  { className: 'red' },
  'cart'
);
console.log(reactElement);

// let count = 0;
// for (let key in reactElement) {
//   count++;
// }
// console.log(count); // 7

// React DOM : Render to Browser
const domRoot = document.getElementById('root');

// Take Over
const root = ReactDOM.createRoot(domRoot);

// Render
root.render(reactElement);
