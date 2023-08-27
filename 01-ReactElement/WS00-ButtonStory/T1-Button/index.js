// #1 React : CreateElement
const btnEl = React.createElement('button', null, 'Button');

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);
