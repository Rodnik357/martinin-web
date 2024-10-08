import React, { useState } from 'react';

import HeaderApp from "./HeaderApp"
import Navbar from "./Navbar";
import Main from "./Main"
import Footer from './Footer';


import '../styles/app.css';


function App() {
  const [activePage, setActivePage] = useState('Home')

  return (<div className='appClass'>

    <HeaderApp />
    <Navbar setActivePage={setActivePage} />
    <Main activePage={activePage} />
    <Footer />
  </div>
  );
}

export default App;
