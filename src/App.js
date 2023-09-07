import React from 'react';
import FrontWeb from './components/Frontweb/Frontweb';
import HomeWeb from './components/HomeWeb/HomeWeb';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/Signup';
import Text from './components/Text/Text';
import ImageSearch from './components/ImageSearch/ImageSearch';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontWeb />} /> {/* Set FrontWeb as the default route */}
        <Route path="/home" element={<HomeWeb />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Text" element={<Text />} />
        <Route path="/ImageSearch" element={<ImageSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
