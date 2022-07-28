import React from 'react';
import RightSection from '../Rightsection/Rightsection';
import './leftsection.css';
import Upper from './Upper/Upper';


class LeftSection extends React.Component{
    render(){
        return (
            <div className="holder">

                <RightSection />
              
                <Upper />
             
            </div>
        )
    }
}

export default LeftSection;