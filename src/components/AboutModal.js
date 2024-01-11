import { closeAboutModalHandler } from "./utils";
import redXbutton from "../images/redxbutton.png";
import "./styles.css";

function AboutModal({ closeAboutModalHandler }) {
  return (
    <div className="about-modal">
      <div className="close-about-modal" onClick={closeAboutModalHandler}>
        <img src={redXbutton} alt="Close Modal" />
      </div>
      <div className="about-modal-wrapper">
        <div className="credits-section">
          <h1>About</h1>
          <br />
          <p>
            This project is a Generation 5 Pokédex and Team Builder app for the
            Black and White - Black and White 2 games. It utilises the{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéAPI
            </a>{" "}
            to fetch Pokémon data, including move and ability data, allowing you
            to learn more about the Pokémon, and also plan a team you can use to
            play the Generation 5 games.
          </p>{" "}
          <br />
          <h1>Credits</h1>
          <br />
          <h4>
            All content is owned by Game Freak & The Pokémon Company. No money
            is made from this.
          </h4>
          <br />
          <p>
            A HUGE thank you to my partner for her idea contributions to the
            project &lt;3
          </p>
          <br />
          <p>
            Another HUGE thank you to{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéAPI
            </a>{" "}
            for providing the API and allowing me to create this project!
          </p>
          <br />
          <h3>Screen Rip Credits</h3>
          <br />
          <p>
            Snivy101, Pikachumazzinga - DeviantArt <br />
            Floofy Panthar - The Sprites Resource
          </p>
          <br />
          <h1>GitHub</h1>
          <br />
          <p>
            The GitHub repo for this project can be found{" "}
            <a
              href="https://github.com/w41ch0ng/RokuDex"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . Take a look!
          </p>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}
export default AboutModal;
