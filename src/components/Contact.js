import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <div className="contentArea">
            <div className="c_container">
                <div className="c_titleArea">
                    <p className="title">Contect Us</p>
                </div>
                <div className="c_item1">
                    <p className="c_text c_title">서울본사</p>
                </div>
                <div className="c_item2">
                    <p className="c_text c_address">ADDRESS</p>
                    <p className="c_text c_info">서울시 서초구 서초대로 396 강남빌딩 16F 1605호</p>
                </div>
                <div className="c_item1">
                    <p className="c_text c_title">찾아오는 길</p>
                </div>
            </div>
            <div className="map">
                <img src="http://placeimg.com/1080/600/3" alt="Business content"/>
            </div>
        </div>
    );
}
export default Contact;