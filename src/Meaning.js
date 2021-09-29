import React from "react";


export default function Meaning(props) {

  console.log(props.meaning);
  return (
    <div className="Meaning">
      <p>
        <strong>
          {props.meaning.partOfSpeech}
        </strong>
      </p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>
                {definition.example}
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );

}