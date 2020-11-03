import React from "react";
import "./Partner.css"
const partners = [
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"},
    {img_src: "http://placeimg.com/180/70/1"}
]
function Partner(){
    return(
        <div id="partner">
        <div className="contentArea">
            <div className="titleArea">
                <p className="title">Partner</p>
                <p className="intro">의뢰주신 고객사를 소개합니다.</p>
            </div>
            <div class="partner-container">
                {partners.map((partner,i)=>(
                    <img src={partner.img_src} class="partner-item"/>
                ))}
            </div>
        </div>
        </div>
    )
}
export default Partner;