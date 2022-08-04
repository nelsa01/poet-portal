import React from "react";
import "./Middle.css";
// import { Link } from "react-router-dom";



export class Middle extends React.Component{

    render(){
        return(
            <div className="middleContainer">
                <div className='poemCardOne'>
                    <div className='poemCardOneTitle'>
                        <h3>Peace was never found but earned</h3>
                    </div>
                    <div className='poemCardOneSummary'>
                        <p>
                            Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                            Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                            Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                            Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                        </p>
                    </div>
                    <div className='poemCardOneAuthor'>
                        <h4>By</h4> <img alt="user profile"  /> <h5>Username</h5>
                    </div>
                    <div className='poemCardOneStats'>
                        <div class='poemCardOneStatsLike'>
                            <img alt="like" /> <h6>200</h6>
                        </div>
                        <div class='poemCardOneStatsComment'>
                        <img alt='comment' /> <h6>60</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}