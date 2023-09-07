import React, { useState } from 'react';
import './HomeWeb.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import giphy1 from './images/giphy.gif';
import giphy2 from './images/giphy2.gif';
import meme from './images/Gif.gif';
import { useAppSelector } from "../../container/store";
import { logout } from "../../page/utils/common";
import icon from './images/icon.jpg';
function HomeWeb() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinksClassName = isNavOpen ? 'nav-links open' : 'nav-links';
  const { isAuth, data: userData } = useAppSelector((state) => state.authReducer);
  
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={icon} alt="Logo Image" />
        </div>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={navLinksClassName}>
          <li><a href="/home">HOME</a></li>
          {isAuth && <Link to="/Text" >TEXT ANIMATION</Link>}
          {isAuth && <Link to="/ImageSearch" >Image Search</Link>}
          {isAuth && <Link to="/MEME" >MEME</Link>}
          {isAuth && <Link to="/books-management" >Quản lý sách</Link>}
          <li>
            <button className="login">
            {!isAuth && <Link to="/sign-in" >Login </Link>}
            {isAuth && <Link to="/sign-in" onClick={logout}>Logout</Link>}
            </button>
          </li>
          <li>
            <button className="join">
            {!isAuth &&<Link to='/Signup'>Signup</Link>}
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
