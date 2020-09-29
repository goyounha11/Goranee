import React from "react";
import "./Home.css";

function Home(){
    return (
        <>
            <div className="main_visual">
                <img src="http://placeimg.com/1920/700/1" alt=""></img>
                <div className="sub">
                    <div className="sub_visual">
                        <img src="http://placeimg.com/200/180/1" width="100%" height="100%" alt=""></img>
                        <img src="http://placeimg.com/200/180/1" width="100%" height="100%" alt=""></img>
                        <img src="http://placeimg.com/200/180/1" width="100%" height="100%" alt=""></img>
                    </div>
                    <div className="sub_info">
                        <div className="info_text">
                            <p id="index">개발 프로세스1</p>
                            <p id="text">개발 프로세스1에 관한 설명</p>
                        </div>
                        <div className="info_text">
                            <p id="index">개발 프로세스2</p>
                            <p id="text">개발 프로세스2에 관한 설명</p>
                        </div>
                        <div className="info_text">
                            <p id="index">개발 프로세스3</p>
                            <p id="text">개발 프로세스3에 관한 설명</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;