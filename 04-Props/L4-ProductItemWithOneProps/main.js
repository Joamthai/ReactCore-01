const product = {
  name: 'IPhone',
  price: '50000',
  description: 'Made in China',
};

// const props = {data : {name:'',price:'',des:''}}
function ProductItem(props) {
  return (
    <div className="container">
      <h1>{props.data.name}</h1>
      <h2>{props.data.price}</h2>
      <p>{props.data.description}</p>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <ProductItem data={product} />
//     </div>
//   );
// }

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<ProductItem data={product} />);
