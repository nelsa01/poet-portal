
import './App.css';
// import HomePage from './ui/components/HomePage/HomePage';
import Middle from './ui/LandingPage/Middle/Middle';
import Sidebar from './ui/LandingPage/Navigation/Sidebar';
import Right from './ui/LandingPage/Right/Right';

function App() {
  return (
    <div className="App">
      
      
      
      {/* <HomePage /> */}
     <div id="sidebarr"><Sidebar /></div>
     <div id='middlebarr'><Middle /></div>
     <div id='rightbar'><Right /></div>
     
     </div>
  );
}

export default App;
