import React from "react";
import Meaning from "./Meaning";


export default function Result(props) {

  if (props.resultData) {
    return (
      <div className="results">
        <h3>You are looking for {props.resultData.word}</h3>
        {props.resultData.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning}/>
            </div>
          )
        })}
      </div>
  );
  } else {
    return null;
  }

}