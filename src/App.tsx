import "./App.css";
import Nav from "./Nav";
import hero from "./assets/team_flag_image.jpg";
function App() {
  return (
    <>
      <Nav />
      <div className="about">
        <div className="hero-text">
          <h1>
            CR<span className="third-letter">O</span>botics #7201
          </h1>
          <p>
            A small team of high school students aiming to compete <br />
            at a high level with a tight budget.
          </p>
        </div>
        <img src={hero} alt="Crobotics Team" className="hero-image" />
      </div>
    </>
  );
}

export default App;
