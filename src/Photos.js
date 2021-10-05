import React from "react";
import "./Photos.css";

export default function Photos(props) {

  if (props.photoData) {
  return (
    <section className="Photos">
      <div className="row">
        {props.photoData.map(function (photos, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photos.url} target="_blank" rel="noreferrer">
                <img src={photos.src.landscape} className="img-fluid" alt="" />
              </a>
            </div>    
          )
        })}
      </div>
    </section>)
  } else {
    return (null);
  }

}