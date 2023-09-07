import React, { useState } from 'react';
import './ImageSearch.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function ImageSearch() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
    const navLinksClassName = isNavOpen ? 'nav-links open' : 'nav-links';
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
  
    const accessKey = 'UL5fKFpiIPoE7a8mMuR64wnNthfLkJ0N5UhdqheTgMk';
  
    const searchImages = async () => {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (page === 1) {
          setResults([]);
        }
  
        const newResults = data.results.map((result) => ({
          id: result.id,
          smallImageUrl: result.urls.small,
          htmlLink: result.links.html,
        }));
  
        setResults((prevResults) => [...prevResults, ...newResults]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setPage(1);
      searchImages();
    };
  
    const handleShowMore = () => {
      setPage(page + 1);
      searchImages();
    };
  
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
          <li><Link to='/private'>PRIVATE</Link></li>
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
        <h1 id="images" className="font-effect-fire">Images Search Engine</h1>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="text"
            id="search-box"
            placeholder="Search anything here..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div id="search-result">
          {results.map((result) => (
            <a key={result.id} href={result.htmlLink} target="_blank">
              <img src={result.smallImageUrl} alt="Search Result" />
            </a>
          ))}
        </div>
        <button
          id="show-more-btn"
          style={{ display: results.length > 0 ? 'block' : 'none' }}
          onClick={handleShowMore}
        >
          Show more
        </button>
      </div>
    );
  }
  
  export default ImageSearch;
  