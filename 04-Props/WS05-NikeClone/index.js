// #1 Write Your Function Component

const productsList = [
  {
    id: 1,
    product_name: 'AJKO 1 Low',
    price: '$120',
    description: "Men's Shoes",
    pic: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3dd4307-1540-46b8-8788-bef407c7a654/ajko-1-low-mens-shoes-HNz9ps.png',
  },
  {
    id: 2,
    product_name: 'Air Jordan 12 Retro',
    price: '$200',
    description: "Men's Shoes",
    pic: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8b99d703-18ef-431a-8f21-eedb4ddc6a83/air-jordan-12-retro-mens-shoes-9rPt0x.png',
  },
  {
    id: 3,
    product_name: 'Air Jordan 2 Retro Low',
    price: '$150',
    description: "Women's Shoes",
    pic: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85cb50eb-804c-46e1-8542-a8396a5fa597/air-jordan-2-retro-low-womens-shoes-cHpxKX.png',
  },
];

function Products(props) {
  console.log(props);
  return (
    <div className="product">
      <img src={props.pic} />
      <div className="info">
        <div className="text">
          <h4>{props.name}</h4>
          <p className="detail">{props.detail}</p>
        </div>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {productsList.map((obj) => (
        <Products
          key={obj.id}
          pic={obj.pic}
          name={obj['product_name']}
          detail={obj.description}
          price={obj.price}
        />
      ))}
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
