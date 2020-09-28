import React from "react";
import "./Business.css";

function Business(){
    return(
        <div className="contentArea">
            <div className="business_container">
                <div className="business_titleArea">
                    <p className="title">Business</p>
                </div>
                <div className="b_text bitem">
                    <p className="b_text bctitle">
                        재고관리 프로그램 및<br /> 견적서 작성 외주 프로그램 개발
                    </p>
                    <p className="b_text bcinfo">
                        재고관리 프로그램 및 견적서 작성 외주 프로그램 <br />
                        개발에 관한 설명이 들어가는 공간입니다.
                    </p>
                </div>
                <div className="bitem bitem2">
                    <img src="http://placeimg.com/450/327/1" alt="Business content"/>
                </div>
                <div className="bitem bitem3">
                    <img src="http://placeimg.com/450/327/2" alt="Business content"/>
                </div>
                <div className="bitem bitem4">
                    <p className="bctitle">
                        IoT App 외주 개발</p>
                    <p className="bcinfo">
                        IoT App 외주 개발에 관한 <br />
                        설명이 들어가는 공간입니다.
                    </p>
                </div>
                <div className="inner-box">

                </div>
            </div>
        </div>
    );
}

export default Business;
