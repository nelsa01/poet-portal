import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Chat from './components/Chat/Chat';
import Landingpage from './components/LandingPage/Landingpage';
import SignUpPage from './components/signup/SignupPage';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/chat' element={<Chat />} />
      <Route path='/signup' element={<SignUpPage />}/>
      <Route path='/landingPage' element={<Landingpage/>} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
