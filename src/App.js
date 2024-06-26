import logo from './logo.svg';
import './App.css';
import Announcement from './component/Announcement';
import Header from './component/Header';
import Featured from './component/Featured';
import Carousel from './component/Carousel';
import Gmailheader from './component/Gmailheader';
import './component/gmailcss.css'
import Main from './component/Main';
import { useState } from 'react';
import Compose from './component/Compose';
function App() {
  const [navhide, setNavHide] = useState(true)
  const [compose, setCompose] = useState(false)
  const hamburger = () => {
    setNavHide(!navhide)
  }
  const handleCompose = () => {
    setCompose(!compose)
  }
  return (
    <div className="athen">
      {/* <Announcement />
      <div className="athen--container">
        <Header />
      </div> */}
      {/* <Featured/> */}
      {/* <Carousel/> */}
      <Gmailheader hamburger={hamburger} />
      <Main navhide={navhide} handleCompose={handleCompose} />
      {compose && <Compose />}
    </div>
  );
}

export default App;
