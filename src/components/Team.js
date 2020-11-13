import React, {useState} from "react";
import "./Team.css";
import {ReactComponent as Team_main} from './Team_main.svg';
import Mem1 from "./Member/Mem1.js";
import Mem2 from "./Member/Mem2.js";
import Mem3 from "./Member/Mem3.js";
import Mem4 from "./Member/Mem4.js";
import Mem5 from "./Member/Mem5.js";
import Mem6 from "./Member/Mem6.js";
import Mem7 from "./Member/Mem7.js";
import Mem8 from "./Member/Mem8.js";
function Team() {
    const [word, setWord] = useState("");
    
    return (
        <div className="contentArea">
            <div className="teamMove"></div>
            <div className="titleArea">
                <p className="title">Team</p>
            </div>
            <div className="team_main">
                <Team_main
                    onClick = {(e) => {
                        console.log(e.target.parentNode.parentNode.id);
                        setWord(e.target.parentNode.parentNode.id);
                    }}
                />
            </div>
            <div className="team_detail">
                {(word === "p1" && <Mem1/> ) || (word === "p4_1_" && <Mem2/>) 
                || (word === "p8_1_" && <Mem3/>) || (word === "p2_1_" && <Mem4/>)
                || (word === "p7_1" && <Mem5/>) || (word === "p5_1_" && <Mem6/>)
                || (word === "p6_1" && <Mem7/>) || (word === "p3_1_" && <Mem8/>)}
            </div>
        </div >
    );
}

export default Team;