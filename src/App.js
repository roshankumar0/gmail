
import './App.css';
import Gmailheader from './component/Gmailheader';
import Main from './component/Main';
import { useState } from 'react';
import Compose from './component/Compose';
import Mapping from './component/Mapping';
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
      {/* <Mapping/> */}
      <Gmailheader hamburger={hamburger} />
      <Main navhide={navhide} handleCompose={handleCompose} />
      {compose && <Compose />}
    </div>
  );
}

export default App;
