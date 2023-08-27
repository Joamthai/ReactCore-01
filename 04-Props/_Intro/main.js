const quotes = [
  {
    quote: 'The only sin is ignorance',
    source: 'Christopher Marlowe',
  },
  {
    quote:
      'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
    source: 'Demosthenes',
  },
  {
    quote:
      'A lie can travel halfway around the world while the truth is putting on its shoes',
    source: 'Mark Twain',
  },
  {
    quote:
      'Great minds discuss ideas; average minds discuss events; small minds discuss people',
    source: 'Eleanor Roosevelt',
  },
  {
    quote: 'If you have a garden and a library, you have everything you need',
    source: 'Marcus Tullius Cicero',
  },
  {
    quote: 'Truth comes out in wine',
    source: 'Pliny the Elder',
  },
  {
    quote: 'Everything in the universe is within you. Ask all from yourself',
    source: 'Rumi',
  },
  {
    quote:
      'When I get a little money I buy books; and if any is left I buy food and clothes',
    source: 'Desiderius Erasmus',
  },
];

function MyComponent(props) {
  console.log(props);
  return <h4>รวย {props.text}!!</h4>;
}

function Button(props) {
  console.log(props.className);
  return <button className={`btn ${props.className}`}>{props.text}</button>;
}
// ## ATTRIBUTE ของ ReactElement
// JSX : <h1 className='red' role='button'>Header</h1>
// const props = {className:'red', role:'button'};
// React : react.createElement('h1',props, 'header')

// ## ส่ง ATTRIBUTE ให้กับ Function Component
// JSX : <MyComponent text='React', className='red'/>
// const props = {text:'React', className='red'}

// props เป็น Object ที่เก็บ key-value of Attribute ของ Component

// 0 attr : <MyComponent/> === MyComponent()
// 1 attr : <MyComponent text='react' className='red/> === MyComponent(props)
// 2 attr : <MyComponent text='react' className='red/> ===

function App() {
  return (
    <h1>
      <h1 className="red">รวย!!</h1>
      <MyComponent />
      <MyComponent text="React" />
      {/*MyComponent({text:'react})*/}
      <MyComponent text="CSS" />
      {/*MyComponent({text:'CSS})*/}
      <MyComponent text="HTML" />
      <MyComponent text="JS" />
      {/*MyComponent({text:'JS, className='red'})*/}
      <MyComponent text="GO" />
      <Button text="Submit" />
      <Button text="Reset" />
      <Button text="Cancel" className="red" />
      <Button text="Cancel" className="black" />
    </h1>
  );
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
