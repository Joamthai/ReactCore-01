// const userProfile = (
//   <div className="profile_card">
//     <h1>Fullname : John Doe</h1>
//     <h2>Age : 30</h2>
//   </div>
// );

// const appComponent = (
//   <>
//     {userProfile}
//     {userProfile}
//     {userProfile}
//   </>
// );

// Component
// สร้าง Componet ได้ 2 วิธี
// 1. Function Component
// 2. Class Component

// Review JS-Function
function randomInRage(min, max) {
  return min + Math.floor(Math.random() * max);
}
let r = randomInRage(1, 10);
console.log(r);

// Function Component : () => ReactElement | JSX
// การประกาศ ชื่อฟังก์ชันขึ้นต้นด้วยตัวใหญ่ (react + dev จะรู้ว่าเป็น Component ไม่ใช่ JS-Function)
// การเรียกใช้ Function Component === Reuse JSX === Reuse UI
// Call <FnName/>

function UserProfileComponent() {
  return <h1>Fullname: John Doe</h1>;
}

// ไม่ต้องมี Component
function UserProfile() {
  return <h1>Fullname: John Doe</h1>;
}

// ***************************************************
// userProfileComponent() === <UserProfileComponent />
// Syntax : <UserProfileComponent /> == call/invoke Function Component

const app = (
  <div>
    {UserProfileComponent()}
    <UserProfileComponent />
    <UserProfile />
  </div>
);

// ***************************************************

// Biggest Component
// function App() {
//   return (
//     <div>
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//     </div>
//   );
// }

// เหมือนเป็นการ Call FN
/*
<div id='root'>
    <div>
        <h1>Fullname: John Doe</h1>
    <div>
<div>
*/

// Create Logo, Nav
function Logo() {
  return (
    <div className="logo">
      <h2>CodeCamp</h2>
    </div>
  );
}
function NavMenu() {
  return (
    <div className="nav_menu" id="nav_menu">
      <ul className="menu_list">
        <li className="nav_menu_item">
          <a href="#" className="nav_menu_link">
            account
          </a>
        </li>
        <li className="nav_menu_item">
          <a href="#" className="nav_menu_link">
            about
          </a>
        </li>
        <li className="nav_menu_item">
          <a href="#" className="nav_menu_link">
            service
          </a>
        </li>
        <li className="nav_menu_item">
          <a href="#" className="nav_menu_link">
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}
// Create Nav
function Nav() {
  return (
    <nav className="nav">
      <Logo />
      <NavMenu />
    </nav>
  );
}

// Create Header Component
function Hearder() {
  return (
    <header className="container header">
      <Nav />
    </header>
  );
}
// Create Hero Component
function Hero() {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="grid-cols-2">
          <div className="grid-item-1">
            <h1 className="main-heading">
              Welcome to <span>CodeCamp</span>
              <br />
              Develop anything.
            </h1>
            <p className="info-text">
              Build a beautiful, modern website with flexible components built
              from scratch.
            </p>
            <div className="btn_wrapper">
              <button className="btn view_more_btn">view all pages</button>
              <button className="btn documentation_btn">documentation</button>
            </div>
          </div>
          <div className="grid-item-2">
            <div className="team_img_wrapper">
              <img src="https://i.ibb.co/YkbPPn3/team.png" alt="team-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Create AppComponent
function App() {
  return (
    <div>
      <Hearder />
      {/*part 2 */}
      <Hero />
    </div>
  );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
// root.render(UserProfile()); // Call แบบ JS-Function
root.render(<UserProfile />); // Call แบบ Function Component

// root.render(App());
root.render(<App />);
