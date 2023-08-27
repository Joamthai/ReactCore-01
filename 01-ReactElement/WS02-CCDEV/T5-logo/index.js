// #1 React : CreateElement
const h2El = React.createElement('h2', null, 'CodeCamp');
const divEl = React.createElement('div', { className: 'logo' }, h2El);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(divEl);
