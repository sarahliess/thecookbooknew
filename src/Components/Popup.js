import React from "react";
import "./Popup.css";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import pinterest from "../img/pinterest.png";
import twitter from "../img/twitter.png";
import copy from "../img/copy.png";

function Popup(props) {
  function copyUrl() {
    /* Get the text field */
    const copyText = document.getElementById("url");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the url: " + copyText.value);
  }

  return props.trigger ? (
    <div className="Popup">
      <div className="PopupTop">
        <h1 className="PopupTitle">Share it with your friends!</h1>
        <div className="CopyUrl">
          <input id="url" type="text" value={window.location.href} />
          <img className="copyimg" src={copy} alt="copy" onClick={copyUrl} />
        </div>
      </div>
      <div className="PopupSocial">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">
          <img src={pinterest} alt="pinterest" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="PopupBottom">
        <button onClick={() => props.setTrigger(false)} className="PopupButton">
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
