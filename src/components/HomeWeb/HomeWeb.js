import React, { useState } from 'react';
import './HomeWeb.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import giphy1 from './images/giphy.gif';
import giphy2 from './images/giphy2.gif';
import meme from './images/Gif.gif';


function HomeWeb() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinksClassName = isNavOpen ? 'nav-links open' : 'nav-links';
  const [snakeGameScore, setSnakeGameScore] = useState(0);
  
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="logo and gif/form.jpg" alt="Logo Image" />
        </div>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={navLinksClassName}>
          <li><a href="/home">HOME</a></li>
          <li><Link to='/Text'>TEXT ANIMATION</Link></li>
          <li><Link to='/ImageSearch'>Image Search</Link></li>
          <li><a href="/contact">MEME</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li>
            <button className="login">
              <Link to='/Login'>Login</Link>
            </button>
          </li>
          <li>
            <button className="join">
            <Link to='/Signup'>Signup</Link>
            </button>
          </li>
        </ul>
      </nav>

      <br /><br /><br /><br /><br /><br />
      <div className="containers">
        <p>Hello 👋 We're</p>
        <section className="animation">
          <div className="first"><div>PTN LOR and BIMPORO</div></div>
          <div className="second"><div>University students</div></div>
          <div className="third"><div>DOING WEB GAME</div></div>
        </section>
      </div>
    <div className="Main" style={{ flexDirection: 'column' }}>
      <div className="clearfix">
        <img className="img1" src={giphy1} alt="shape animation" />
        <h1 className="p1">IMAGES SEARCH</h1>
      </div>

      <div className="clearfix">
        <img className="img2" src={giphy2} alt="text animation" />
        <div className="font-effect-fire">
          <h1 className="p2">ALSO TEXT ANIMATION</h1>
        </div>
        <hr />
      </div>
      <div className="clearfix">
        <img className="img1" src={meme} alt="MEME" />
        <br />
        <h1 className="p1">AND MEME TOO</h1>
        <hr />
      </div>
    </div>
        {/* Add the rest of your web.html content here */}
        
      </div>
  );
}

export default HomeWeb;
