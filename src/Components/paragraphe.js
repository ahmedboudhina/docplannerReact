import React from "react";

function Parag(props) {
  return (
    <div>
      <img
        className="Smalllogo"
        src="https://www.docplanner.com/img/sygnet.png"
        alt="logo"
      />
      <h1 className="title">Making the healthcare experience more human</h1>
      <div className="Twopara">
        {props.para.map((el, i) => (
          <p className="parag">{el}</p>
        ))}
      </div>
    </div>
  );
}
export default Parag;