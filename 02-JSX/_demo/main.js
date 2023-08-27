// JSX : Javascript Syntax Extension + Babel
// Declarative : อยากได้อะไรให้บอก เดี๋ยวจัดการให้
// const header = <h1>Hello</h1>;
// NOT Render String

// const myLuckyNum = Math.random;

const userAge = 40;
const fullName = 'John Doe';
const userHobby = 'Sport';
const isMarried = true;
const exp = ['Driver', 'Dev', 'Prime minister'];

const userPet = {
  dog: 'Jum-Meng',
  cat: 'Kai-Kaow',
};

const styleObj = {
  color: 'blue',
};

const expList = exp.map((career) => <li>{career}</li>);

const userProfile = (
  <div>
    <h1 className="header">FullName : {fullName}</h1>
    <h4>age : {userAge}</h4>
    <h4>hobby : {userHobby}</h4>
    <h4>isMarried : {isMarried ? 'true' : 'false'}</h4>
    <h4>Experience : </h4>
    <ul>{expList}</ul>
    <h4>Pets</h4>
    <p style={styleObj}>DOG : {userPet.dog}</p>
    <p>CAT : {userPet.cat}</p>
    {/* <h4>myLuckyNum</h4> */}
  </div>
);

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);
