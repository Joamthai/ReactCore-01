// #1 React : CreateElement
const span = (content) => React.createElement('span', null, content);

const btnElement = React.createElement('button', { className: 'button' }, [
  span(),
  span(),
  span(),
  span(),
  span('Button'),
]);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(btnElement);
