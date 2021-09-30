import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {

  return (
    <div className="Meaning">
      <p className="text-capitalize">
        <strong>
          {props.meaning.partOfSpeech}
        </strong>
      </p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>{definition.definition}
              <br />
              <em>
                <strong>Example: </strong>{definition.example}
              </em>
              <Synonyms synonyms={definition.synonyms}/>
            </p>
          </div>
        );
      })}
    </div>
  );

}