import React from "react";
import "./Phonetics.css"

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio)

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button type="button" onClick={handleClick}><img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/50/000000/external-speaker-ux-and-ui-flatart-icons-lineal-color-flatarticons.png" alt=""/></button>
        <div className="phonetic-text">
          {props.phonetic.text}
        </div>
      </div>
    );

  }


}