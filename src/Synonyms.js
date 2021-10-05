import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          if (index < 6) {
            return (
              <div className="text-capitalize" key={index} >
                {synonym},
              </div>
            )
          } else {
            return null;
          }
        })}
      </div>
    )
  } else {
    return (null);
  }
}