// #1 React : CreateElement
function Header() {
  return (
    <div className="header">
      <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>;
    </div>
  );
}

function InfoText() {
  return (
    <p>
      Welcome to Hensui, the newest addition to the vibrant Los Angeles dining
      scene! Our restaurant is dedicated to bringing you the most authentic and
      delicious Japanese cuisine. <br></br>Stay tuned for our grand opening
      date, sign up with your e-mail address to get notified.
    </p>
  );
}

function ContactUS() {
  return (
    <form>
      <input className="text" type="text" placeholder="e-mail"></input>
      <input className="submit" type="submit"></input>
    </form>
  );
}

function Hero() {
  return (
    <img src="https://i.ibb.co/9VZRsxF/pexels-cottonbro-studio-3296546-1.png" />
  );
}

function AppComponent() {
  return (
    <div className="page">
      <div className="hero">
        <Hero />
      </div>
      <div className="text-info">
        <Header />
        <InfoText />
        <ContactUS />
      </div>
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<AppComponent />);
