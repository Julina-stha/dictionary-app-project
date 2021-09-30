import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";


export default function Result(props) {
  if (props.resultData) {
    return (
      <div className="results">
        <h3>You are looking for the word <span className="text-capitalize"><strong>{props.resultData.word}</strong></span></h3>
        {props.resultData.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          )
        })}
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