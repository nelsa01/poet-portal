import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Landingpage from './components/LandingPage/Landingpage';
import { SignInPage } from './components/signinPage/SigninPage';
import SignUpPage from './components/signup/SignupPage';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUpPage />}/>
      <Route path='/landingPage' element={<Landingpage/>} />
      <Route path='/signin' element={<SignInPage />} />
    </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
