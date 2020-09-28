import React, {useState} from "react";
import "./Team.css";
import {ReactComponent as Team_main} from './Team_main.svg';
import Mem1 from "./Mem1.js";
import Mem2 from "./Mem2.js";
import Mem3 from "./Mem3.js";
import Mem4 from "./Mem4.js";
import Mem5 from "./Mem5.js";
import Mem6 from "./Mem6.js";
import Mem7 from "./Mem7.js";
import Mem8 from "./Mem8.js";
function Team() {
    const [word, setWord] = useState("");
    return (
        <div className="contentArea">
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