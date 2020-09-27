import React from "react";
import "./Business.css";

function Business(){
    return(
        <div className="contentArea">
            <div className="container">
                <div className="row">
                    <div className="business_titleArea">
                        <p className="title">Business</p>
                    </div>
                    <div className="business_contentArea">
                        <div className="one_content_LetterArea">
                            <p className="one_content_title">
                                재고관리 프로그램 및<br /> 견적서 작성 외주 프로그램 개발
                            </p>
                            <p className="one_content_info">
                                재고관리 프로그램 및 견적서 작성 외주 프로그램 <br />
                                개발에 관한 설명이 들어가는 공간입니다.
                            </p>
                        </div>
                        <div className="one_content_imgArea">
                            <img src="http://placeimg.com/450/327/1" alt="Business content"/>
                        </div>
                    </div>
                    <div className="business_contentArea">
                        <div className="two_content_imgArea">
                            <img src="http://placeimg.com/450/327/2" alt="Business content"/>
                        </div>
                        <div className="two_content_LetterArea">
                            <p className="two_content_title">
                                IoT App 외주 개발</p>
                            <p className="two_content_info">
                                IoT App 외주 개발에 관한 <br />
                                설명이 들어가는 공간입니다.
                            </p>
                        </div>
                        <div className="inner-box">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;
