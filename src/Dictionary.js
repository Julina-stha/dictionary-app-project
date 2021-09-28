import React, { useState} from "react";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching  for ${keyWord}`);
  }

  function recordTypedWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" className="search-engine" onChange={recordTypedWord}></input>
      </form>
    </div>
  )
}