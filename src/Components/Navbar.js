import React from "react";

function Navbar(props) {
  return (
    <div
      className="nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>        

      <div className="items">
        {props.nav.map((el, i) => (
          <ul className="menu">
            <li>{el.item}</li>
            {el.subitem
              ? el.subitem.map((el, i) => (
                  <ul className="dropdownMenu">
                    <li>{el}</li>
                  </ul>
                ))
              : null}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Navbar;