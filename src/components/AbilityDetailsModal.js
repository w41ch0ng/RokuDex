import { useContext } from "react";
import "./styles.css";
import { CapitaliseEachWordContext } from "./PokeList";
import moveslotimage from "../images/moveslot.png";
import selectedMoveslotImage from "../images/move slot green highlight.png";
import { handleMoveClick, handleAbilityClick, fetchAbilityData } from "./utils";

function AbilityDetailsModal({
  abilities,
  selectedAbility,
  abilityData,
  onClose,
  handleAbilityClick,
  setSelectedAbility,
  abilityDetailsModalHandler,
}) {
  const { capitaliseEachWord } = useContext(CapitaliseEachWordContext);
  return (
    <div className="ability-full-container">
      <div className="move-ability-container">
        <div className="move-ability-details">
          <p className="move-ability-description-effect">Effect</p>
        </div>
        <div className="move-ability-details">
          <p className="description-effect">
            {abilityData.effect_entries[1].effect || "--"}
          </p>
          {/* <p>Description: {abilityData.flavor_text_entries[1].flavor_text}</p>*/}
        </div>
      </div>
      <div className="abilities-container">
        <div>
          {abilities.map((abilities) => (
            <div
              className={`moveslots-abilityslots ${
                selectedAbility && selectedAbility.name === abilities
                  ? "selected"
                  : ""
              }`}
              key={abilities}
              onClick={() => {
                handleAbilityClick(abilities);
              }}
            >
              <img
                src={
                  selectedAbility && selectedAbility.name === abilities
                    ? selectedMoveslotImage
                    : moveslotimage
                }
                alt="Move Slot"
              />
              <p
                className={`abilities ${
                  selectedAbility && selectedAbility.name === abilities
                    ? "selected"
                    : ""
                }`}
                key={abilities}
                onClick={() => {
                  handleAbilityClick(
                    abilities,
                    fetchAbilityData,
                    setSelectedAbility,
                    abilityDetailsModalHandler
                  );
                }}
              >
                {abilities}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AbilityDetailsModal;
