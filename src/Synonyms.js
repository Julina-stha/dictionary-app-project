import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="text-capitalize" key={index} >
              {synonym},
            </div>
          )

        })}
      </div>
    )
  } else {
    return (null);
  }
}