// #1 React : JSX
let fullName = 'JT';
let birthYear = 2000;
const CURRENT_YEAR = 2023;
const userProfile = (
  <>
    <h1 className="text-red">fullname :{fullName}</h1>
    <p>Age {CURRENT_YEAR - birthYear}</p>
  </>
);
// #2 ReactDOM : createRoot

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(userProfile);
