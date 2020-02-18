import React from "react";
import "./Box.css";
function Docplanner({ textBoxArray }) {
  return (
    <div className="box-container">
      {textBoxArray.map((el, index) => (
        <div
          key={index}
          className={el.select ? "box green-Box" : "box bleu-Box"}
        >
          <h5>{el.tag}</h5>
          <h3>{el.title}</h3>
          {el.select ? (
            <select>
              {el.select.map(item => (
                <option>{item}</option>
              ))}
            </select>
          ) : null}
          <img src={el.pic} alt="..." />
        </div>
      ))}
    </div>
  );
}

export default Docplanner;
