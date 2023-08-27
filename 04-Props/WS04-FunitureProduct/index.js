// #1 Write Your Function Component

const productsList = [
  {
    id: 1,
    product_name: 'Sprouts - Bean',
    price: '$3.37',
    description: 'In hac habitasse platea dictumst.',
    discount: 41,
    pic: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    product_name: 'Cinnamon Rolls',
    price: '$3.52',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    discount: 50,
    pic: 'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    product_name: 'Flour - Bread',
    price: '$8.97',
    description: 'Curabitur gravida nisi at nibh.',
    discount: 49,
    pic: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 4,
    product_name: 'Nantucket Cranberry Juice',
    price: '$9.30',
    description: 'Vestibulum sed magna at nunc commodo placerat.',
    discount: 29,
    pic: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 5,
    product_name: 'Bread - 10 Grain',
    price: '$7.68',
    description: 'Maecenas tincidunt lacus at velit.',
    discount: 47,
    pic: 'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 6,
    product_name: 'Oneshot Automatic Soap System',
    price: '$7.80',
    description: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    discount: 23,
    pic: 'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 7,
    product_name: 'Cleaner - Lime Away',
    price: '$3.70',
    description: 'Vestibulum ante ipsum primis ',
    discount: 28,
    pic: 'https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 8,
    product_name: 'Beer - Upper Canada Light',
    price: '$4.36',
    description: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    discount: 25,
    pic: 'https://images.pexels.com/photos/1008692/pexels-photo-1008692.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 9,
    product_name: 'Turkey Leg With Drum And Thigh',
    price: '$1.49',
    description: 'Cras non velit nec nisi vulputate nonummy.',
    discount: 48,
    pic: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 10,
    product_name: 'Coffee - Beans, Whole',
    price: '$9.38',
    description: 'Maecenas tristique, est et tempus semper,',
    discount: 44,
    pic: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 11,
    product_name: 'Container - Hngd Cll Blk 7x7x3',
    price: '$6.86',
    description: 'Nunc nisl. Duis bibendum, ',
    discount: 16,
    pic: 'https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 12,
    product_name: 'Lobster - Tail, 3 - 4 Oz',
    price: '$8.17',
    description: 'Proin risus.',
    discount: 43,
    pic: 'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 13,
    product_name: 'Wine - Sake',
    price: '$2.18',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    discount: 39,
    pic: 'https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 14,
    product_name: 'Buttons',
    price: '$5.01',
    description: 'Etiam faucibus cursus urna. Ut tellus.',
    discount: 32,
    pic: 'https://images.pexels.com/photos/4112553/pexels-photo-4112553.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 15,
    product_name: 'Beef - Short Ribs',
    price: '$5.40',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    discount: 33,
    pic: 'https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 16,
    product_name: 'Dc - Frozen Momji',
    price: '$4.21',
    description: 'Cum sociis natoque penatibus',
    discount: 24,
    pic: 'https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 17,
    product_name: 'Fish - Soup Base, Bouillon',
    price: '$4.15',
    description: 'Lorem ipsum dolor sit amet,',
    discount: 49,
    pic: 'https://images.pexels.com/photos/4913351/pexels-photo-4913351.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 18,
    product_name: 'Shrimp - Black Tiger 8 - 12',
    price: '$0.95',
    description: 'Maecenas leo odio, condimentum id,.',
    discount: 14,
    pic: 'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 19,
    product_name: 'Wine - Acient Coast Caberne',
    price: '$5.59',
    description: 'Cum sociis natoque penatibus ',
    discount: 11,
    pic: 'https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 20,
    product_name: 'Tabasco Sauce, 2 Oz',
    price: '$2.28',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo. ',
    discount: 48,
    pic: 'https://images.pexels.com/photos/5255232/pexels-photo-5255232.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

function Products(props) {
  console.log(props);
  return (
    <div className="product">
      {/* <div className="img"> */}
      <img src={props.pic} />
      {/* </div> */}
      <div className="text">
        <h4>{props.name}</h4>
        <p className="detail">{props.detail}</p>
        <div className="price_tag">
          <p className="price">{props.price}</p>
          <p className="discount">${props.discount}</p>
        </div>
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
          discount={obj.discount}
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
