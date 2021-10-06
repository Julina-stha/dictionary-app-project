import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";


export default function Meaning(props) {

  return (
    <div className="Meaning">
      <section>
        <p className="text-capitalize" id="KeyWord">
          <strong>
            {props.meaning.partOfSpeech}
          </strong>
        </p>
        {props.meaning.definitions.map(function (definition, index) {
          if (index < 2) {
            return (
              <div className="MeaningResults" key={index}>
                <div className="definitions">
                  <strong>Definition: </strong>{definition.definition}
                </div>
                <div className="examples">
                  <em>
                    <strong>Example: </strong>"{definition.example}"
                  </em>
                </div>
                <div className="synonyms">
                  <Synonyms synonyms={definition.synonyms} synonymSearch={props.synonymSearch}/>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );

}