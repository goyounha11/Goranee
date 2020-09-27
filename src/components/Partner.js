import React from "react";
import "./Partner.css"
function Partner(){
    return(
        <div>
        <div className="titleArea">
            <p className="title">Partner</p>
            <p className="intro">의뢰주신 고객사를 소개합니다.</p>
        </div>

        <div className="contentArea">
            <div class="partner-container">
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            <img src="http://placeimg.com/140/45/1" class="partner-item"></img>
            </div>
        </div>
        </div>
    )
}
export default Partner;