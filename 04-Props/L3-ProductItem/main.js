function ProductItem(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(
  <ProductItem name="IPhone" price="50000" description="Made in China" />
);
