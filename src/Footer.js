import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_question">
          <p>Questions? Call XXX-XXX-XXX-XXXX</p>
        </div>
        <div className="footer_ul_box">
          <ul>
            {["FAQ", "Investor Relations", "Privacy", "Speed Test"].map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
          <ul>
            {["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"].map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
          <ul>
            {[
              "Account",
              "Ways to Watch",
              "Corporate Information",
              "Only on Netflix",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {["Media Centre", "Terms of Use", "Contact Us"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer_select">
          <i className="fa fa-globe"  style={{fontSize :'24px'}}></i>
          <select name="lang" id="lang">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <p>Netflix Clone</p>
      </div>
    </div>
  );
}

export default Footer;
