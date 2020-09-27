import React from "react";
import "./Team.css";
import {ReactComponent as Team_main} from './Team_main.svg';
function Team() {
    return (
        <div className="contentArea">
            <div className="team_title">
                <h1>Team</h1>
            </div>
            <div className="team_main">
                <Team_main />
            </div>
        </div >
    )
}

export default Team;