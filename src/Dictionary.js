import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelApiKey = "563492ad6f91700001000001c2a803b5557b4a3d8a651498a8ef2244";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    axios.get(pexelUrl, { headers: { Authorization : `Bearer ${pexelApiKey}` }}).then(handlePexelResponse);
  }

  function handlePexelResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }


  function handleDictionaryResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function recordTypedWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <header className="App-header">
        Dictionary for you! <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-book-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" className="book" alt="" />
      </header>
      <h2>What word are you looking for today? <img src="https://img.icons8.com/ios/100/000000/thinking-bubble.png" className="cloud" alt="" width="50" /></h2>
      <form onSubmit={search}>
        <input type="search" className="search-engine" onChange={recordTypedWord} autoComplete="off"></input><img src="https://img.icons8.com/cotton/45/000000/search--v2.png" className="search-icon" width="45" alt=""/>
      </form>
      <Result resultData={results} searchWord={keyWord} />
      <Photos photoData={photos} />
    </div>
  )
}