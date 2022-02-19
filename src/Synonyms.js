import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          if (index < 6) {
            return (
              <div className="text-capitalize" key={index} >
                <a href="/" onClick={props.synonymSearch}>
                  {synonym}
                </a>
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