import React, { useState, useEffect } from "react";
import "./style.css"; // Import your CSS file
import { useAppSelector } from "../../container/store";
import { logout } from "../../page/utils/common";
import icon from './icon.jpg';
import { Link } from 'react-router-dom';
function MemeGenerator() {
  const [memeData, setMemeData] = useState({
    url: "",
    title: "Loading...",
    author: "",
  });

  useEffect(() => {
    generateMeme();
  }, []);

  const updateDetails = (url, title, author) => {
    setMemeData({
      url,
      title,
      author: `Meme by: ${author}`,
    });
  };

  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
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
          {isAuth && <Link to="/MemeGenerator" >MEME</Link>}
          {isAuth && <Link to="/memes-management" >Favorite meme</Link>}
          <li>
            <button className="login">
            {!isAuth && <Link to="/sign-in" >Login </Link>}
            {isAuth && <Link to="/sign-in" onClick={logout}>Logout</Link>}
            </button>
          </li>
          <li>
            <button className="join">
            {!isAuth &&<Link to='/sign-up'>Signup</Link>}
            </button>
          </li>
        </ul>
      </nav>
      <div className="meme-generator">
        <button className="generate-meme-btn" onClick={generateMeme}>
          Generate Meme
        </button>
        <h4 className="meme-title">{memeData.title}</h4>
        <img src={memeData.url} alt="" />
        <div className="meme-author">{memeData.author}</div>
      </div>
    </div>
  );
}

export default MemeGenerator;
