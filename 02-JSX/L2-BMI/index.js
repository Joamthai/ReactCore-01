// #1 React : JSX
const calcBMI = (height, weight) => (weight / height ** 2).toFixed(2);

const displayBMI = (
  <>
    <h1>BMI</h1>
    <h3>{calcBMI(1.8, 70)}</h3>
  </>
);

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(displayBMI);
