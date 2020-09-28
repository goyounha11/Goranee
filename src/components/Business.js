import React from "react";
import "./Business.css";

function Business(){
    return(
        <div className="contentArea">
            <div className="container">
                <div className="business_titleArea">
                    <p className="title">Business</p>
                </div>
                <div className="business_contentArea business_contentArea_a">
                    <div className="bcLetterArea bcLetterArea_left">
                        <p className="bcTitle bcTitle_left">
                            재고관리 프로그램 및<br /> 견적서 작성 외주 프로그램 개발
                        </p>
                        <p className="bcInfo bcInfo_left">
                            재고관리 프로그램 및 견적서 작성 외주 프로그램 <br />
                            개발에 관한 설명이 들어가는 공간입니다.
                        </p>
                    </div>
                    <div className="bcImgArea bcImgArea_right">
                        <img src="http://placeimg.com/450/327/1" alt="Business content"/>
                    </div>
                </div>
                <div className="business_contentArea business_contentArea_b">
                    <div className="bcImgArea bcImgArea_left">
                        <img src="http://placeimg.com/450/327/2" alt="Business content"/>
                    </div>
                    <div className="bcLetterArea bcLetterArea_right">
                        <p className="bcTitle bcTitle_right">
                            IoT App 외주 개발</p>
                        <p className="bcInfo bcInfo_right">
                            IoT App 외주 개발에 관한 <br />
                            설명이 들어가는 공간입니다.
                        </p>
                    </div>
                    <div className="inner-box">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;
