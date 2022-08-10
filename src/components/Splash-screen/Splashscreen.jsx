import React from 'react'
import './splash-screen.css'
import screen from '../../resources/Splash Screen.png'

class SplashScreen extends React.Component {
    render() { 
        return (
            <div className='Splash-screen'>
              <img src={screen} alt="" className="splash-img" />
            </div>
        );
    }
}
 
export default SplashScreen;