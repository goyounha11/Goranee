import React from "react";
import "./Team.css";
import Mainimg from "../image/Team/main.gif";
import p1 from "../image/Team/p1.gif";

function Team() {
    return (
        <div className="contentArea">
            <div className="team_title">
                <h1>Team</h1>
            </div>
            <div className="team_main">
                <img src={Mainimg} alt="bg" useMap="#Map1" />
                <map name="Map1" id="Map">
                    <area href="javascript:(function(){document.getElementById('img1').src={p1};})()" shape="circle" coords="240,180,140"/>
                    <area href="javascript:(function(){document.getElementById('img1').src='https://www.xul.fr/images/collar.jpg';})()" shape="rect" coords="60,330,440,520"/>
                </map>
            </div>

                    <div class="selection">
                        <p>click a brick</p>
                    </div>
        </div >
    )
}

export default Team;