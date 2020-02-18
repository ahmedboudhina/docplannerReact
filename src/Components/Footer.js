import React from "react";

export default function Footer(props) {
  return (
    <div>
      <div className="footer2">
        <p>We are leaders in 10 countries . </p>
        {props.footer.map((el, i) => (
          <a className="footer3" href={el.href}>
            {el.name}
          </a>
        ))}
      </div>

      <p className="footer4">
        This site uses cookies to deliver services in accordance with this
        Privacy Policy. You can specify the conditions for storing or accessing
        cookies on your browser.
      </p>
      <p className="footer5">www.docplanner.com © 2020</p>
    </div>
  );
}