import React from "react";

export default function Title(props) {
  return (
    <div>
      {props.sentence.map((el, i) => (
        <div>
          <h1 className="title1">{el.title1}</h1>
          <h1 className="title2">{el.title2}</h1>
          <p className="title3">{el.parag}</p>
        </div>
      ))}
    </div>
  );
}