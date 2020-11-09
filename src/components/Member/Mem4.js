import React from 'react';

function Mem4(){
    return (
        <div className="team_profile">
            <div className="team_pic">
                <img src={person}/>
            </div>
            <div className="team_history">
                <div className="history_title">
                    <span className="user_name">신철호</span>
                    <span className="user_engName">Shin ChulHo</span>
                    <p>Back-end Developer</p>
                    <span className="user_history_title">History</span>
                </div>
                <div className="user_history_content">
                    <p>하하하하</p>
                    <p>하하하하</p>
                    <p>하하하하</p>
                    <p>하하하하</p>
                    <p>하하하하</p>
                    <p>하하하하</p>
                    <p>하하하하</p>
                    <p>하하하하</p>
                </div>
            </div>
        </div>
        
        
        );
}

export default Mem4;