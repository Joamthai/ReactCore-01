// #1 React : JSX
// <input/> self Closing (No need Child)
// class => className
// for => htmlFor
// onclick => onClick

const formData = (
  <>
    <label htmlFor="username_id">Username</label>
    <input className="username" id="username_id" name="username"></input>
  </>
);

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(formData);
