import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./App.css";
import "./Dictionary.css";


export default function Result(props) {
  if (props.resultData) {
    return (
      <div className="results">
        <div className="phonetics-part">
          <section>
            <h3>You are looking for the word:
            <div className="text-capitalize" id="KeyWord"><strong>{props.resultData.word}</strong></div></h3>
            {props.resultData.phonetics.map(function (phonetic, index) {
              if (index < 1) {
                return (
                  <div className="phonetic-button" key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                )
              } else {
                return (null);
              }
            })}
          </section>
        </div>
        {props.resultData.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} synonymSearch={props.synonymSearch}/>
            </div>
            )
        })}
      </div>
      
  );
  } else {
    return null;
  }

}