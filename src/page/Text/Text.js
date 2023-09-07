import React, { Component, useState } from 'react';
import './Text.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from "../../container/store";
import { logout } from "../../page/utils/common";
import icon from './icon.jpg';
function Text() {
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
      <br/>

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Monitor wrapper */}
      <div className="table center">
        <div className="monitor-wrapper center">
          <div className="monitor center">
            <p>Nguyen and Duy, two individuals, have skillfully transformed this website into better ones</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a
        href="https://codepen.io/jesuskinto/pen/wvJeVez"
        style={{ color: 'white', fontSize: '150%' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        The code Links
      </a>

      {/* The shining name */}
      <div className="shinning">
        <p>BIMPORO and PTN Lor</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <a
        href="https://codepen.io/FrankieDoodie/pen/dgVGad"
        style={{ color: 'white', fontSize: '150%' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        The code Links
      </a>

      {/* Text with other background */}
      <h3 contentEditable data-heading="Frozen">
        Be yourself; everyone else is already taken
      </h3>
      <br />
      <br />
      <br />
      <br />
      <a
        href="https://codepen.io/SmaugTHEDrag/pen/NWOZdgm"
        style={{ color: 'white', fontSize: '150%' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        The code Links
      </a>

      {/* Wavy text */}
      <div className="waviy">
        <span style={{ '--i': 1 }}>K</span>
        <span style={{ '--i': 2 }}>I</span>
        <span style={{ '--i': 3 }}>N</span>
        <span style={{ '--i': 4 }}>G</span>
        <span style={{ '--i': 5 }}> </span>
        <span style={{ '--i': 6 }}>P</span>
        <span style={{ '--i': 7 }}>T</span>
        <span style={{ '--i': 8 }}>N</span>
        <span style={{ '--i': 9 }}>L</span>
        <span style={{ '--i': 10 }}>O</span>
        <span style={{ '--i': 11 }}>R</span>
      </div>
    </div>
  );
}

export default Text;
