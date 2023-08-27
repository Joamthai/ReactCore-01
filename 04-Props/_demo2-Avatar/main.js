const persons = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
];

// Function Component
// props
function Avatar(props) {
  //   console.log(props.source);
  //   console.log(props.alt);
  //   console.log(props);
  return (
    <div className="avatar">
      <img className="avatar__image" alt={props.alt} src={props.source} />
    </div>
  );
}

const people = ['Arya', 'Ned', 'Rob', 'John'];
// MAP : name => <Avatar />
// 1st : "Arya" => <Avatar alt="Arya" />

const list = people.map((name) => <Avatar alt={name} />);
// list = [
//     <Avatar alt="Arya" />,
//     <Avatar alt="Ned" />,
//     <Avatar alt="Rob" />,
//     <Avatar alt="John" />,
// ]

const peopleLists = [
  {
    id: 1,
    name: 'Arya',
    age: 18,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    name: 'Ned',
    age: 18,
    src: '',
  },
  {
    id: 3,
    name: 'Rob',
    age: 18,
    src: '',
  },
  {
    id: 4,
    name: 'John',
    age: 18,
    src: '',
  },
];

function AvatarGroup() {
  return (
    <div className="container">
      {/* <Avatar alt="Tony Stark" /> */}
      {/* <Avatar alt="Nest Stark" /> */}
      {/* {list} */}
      {/* {people.map((name) => (
        <Avatar alt={name} />
      ))} */}
      {peopleLists.map((person) => (
        <Avatar alt={person.name} source={person.src} />
      ))}
    </div>
  );
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<AvatarGroup />);
