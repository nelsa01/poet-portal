import React from "react";

import "./Tips.css";

function Tips() {
    let poemTips = [
        {
            title: "Lorem ipsum",
            tip: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },
        {
            title: "Lorem ipsum",
            tip: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        }     
    ];

    return(
        <div className="tipsContainer">
            <h3>Tips to write a good poem</h3>
            <ul>
            {
                poemTips.map((t, i) => {
                    return (
                        <div key={i}>
                            <li>{t.title}</li>
                            <p>{t.tip}</p>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default Tips;