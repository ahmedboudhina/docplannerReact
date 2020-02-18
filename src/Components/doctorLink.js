import React from "react";
import "./doctor.css";
function DoctorLink(props) {
    return (
      <div className="doctorLink">
        <h2>We are a global company with local culture</h2>
        <div className="doclogo">
          {props.doctorl.map((el, i) => (
            <svg className="doclogoli" xmlns={el.logo}>
              <path d={el.path}></path>
            </svg>
          ))}
        </div>
      </div>
    );
  }
  export default DoctorLink;