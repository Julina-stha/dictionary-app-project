import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function recordTypedWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>What are you looking for? <img src="https://img.icons8.com/ios/100/000000/thinking-bubble.png" className="cloud" alt="" width="60" /></h2>
      <form onSubmit={search}>
        <input type="search" className="search-engine" onChange={recordTypedWord} autoComplete="off"></input><i className="fas fa-search"></i>
      </form>
      <Result resultData={results} searchWord={keyWord}/>
    </div>
  )
}