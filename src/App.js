import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { JoinUs } from './components/JoinUs/Joinus';
import Landingpage from './components/LandingPage/Landingpage';
import { SignInPage } from './components/signinPage/SigninPage';
import SignUpPage from './components/signup/SignupPage';
import SplashScreen from './components/Splash-screen/Splashscreen';
import Write from './components/WritePage/Write';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUpPage />}/>
      <Route path='/landingPage' element={<Landingpage/>} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/' element={<SplashScreen />} />
      <Route path='/joinus' element={<JoinUs />} />
      <Route path='/write' element={<Write />} />
    </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
