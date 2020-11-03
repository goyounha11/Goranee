import React from "react";
import "./Home.css";
// 개발프로세스 내용수정 (Home)
const processes = [
    {
        id: 1,
        title: "개발프로세스1",
        description: "개발프로세스1에 관한 설명",
        img_src: "http://placeimg.com/200/180/1"
    },
    {
        id: 2,
        title: "개발프로세스2",
        description: "개발프로세스2에 관한 설명",
        img_src: "http://placeimg.com/200/180/1"
    },
    {
        id: 3,
        title: "개발프로세스3",
        description: "개발프로세스3에 관한 설명",
        img_src: "http://placeimg.com/200/180/1"
    }
];

function Home(){
    return (
        <div id="home">
            <div className="main_visual">
                <img src="http://placeimg.com/1920/700/1" alt=""/>
                <div className="sub">
                    <div className="sub_visual">
                        {processes.map((process,i)=>(
                            <img src={process.img_src} width="100%" height="100%" alt=""/>
                        ))}
                    </div>
                    <div className="sub_info">
                        {processes.map((process,i)=>(
                            <div className="info_text">
                                <p id="index">{process.title}</p>
                                <p id="text">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;