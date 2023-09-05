import React from 'react';
import './Frontweb.css'; // Import the CSS file
import { Link } from 'react-router-dom';
function FrontWeb() {
  return (
    <div>
      <br/>
      {/* Header */}
      <header id="overlay">
        <h1 className="font-effect-neon">WELCOME TO FUNNY WEB</h1>
      </header>
      {/* Create the button */}
      <div className="wrap">
      <div className="wrap">
        <Link to="/home"> {/* Use Link to navigate */}
          <button className="button">Join our web</button>
        </Link>
      </div>
      </div>
      {/* Create the layer */}
      <div id="hey">
        <div id="layer-up"></div>
      </div>
      <div id="layer-0">
        <div id="layer-1">
          <div id="layer-2">
            <div id="lines">
              <div id="layer-corner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontWeb;
