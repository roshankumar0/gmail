import logo from './logo.svg';
import './App.css';
import Announcement from './component/Announcement';
import Header from './component/Header';
import Featured from './component/Featured';
import Carousel from './component/Carousel';
import Gmailheader from './component/Gmailheader';
import './component/gmailcss.css'
import Main from './component/Main';
function App() {
  return (
    <div className="athen">
      {/* <Announcement />
      <div className="athen--container">
        <Header />
      </div> */}
      {/* <Featured/> */}
      {/* <Carousel/> */}
      <Gmailheader />
      <Main />
    </div>
  );
}

export default App;
