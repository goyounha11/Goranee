import React from 'react';
import Home from "./routes/Home";
import Business from "./components/Business";
import Team from "./components/Team";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import "./App.css"
import Logo from "./image/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
function App(fuc){
    /* 변수 선언 */
    var el=document.querySelector('business');
    
    var winScrollTop; // 스크롤바의 높이를 담을 변수를 선업합니다
    var sectionOfffsetTop; // 섹션의 오프셋탑값을 저장할 변수
    var sectionHeight; //섹션의 높이를 담을 변수
    var sectionOffsetBottom; //섹션의 오프셋 바텀값을 저장할 변수
    var checkInSection = false; //섹션에 진입해 함수가 실행되었는지 체크하는 변수
    var fastIn; //섹션에 더 빠르게 진입하도록 값을 조절할 변수

    var startFunction = fuc; //깡 섹션인 함수에 전달된 함수
    var isFunction = typeof(startFunction) === 'function' ? true : false; //전달된 값이 함수인지 체크

    const setProperty = () => ( // 스크롤할때 변할 값들을 셋팅해주는 함수

    	fastIn = document.querySelector(this).height() / 2, // 섹션에 더 빨리 진입해 함수가 실행되록 값을 조절함
        winScrollTop = document.querySelector(this).scrollTop(), //스크롤바의 현재 위치를 구합니다
        sectionOfffsetTop = el.offset().top - fastIn, //섹션의 오프셋 탑 값
        sectionHeight = el.height(), //섹션의 높이값
        sectionOffsetBottom = sectionOfffsetTop + sectionHeight + fastIn //섹션의 오프셋 바텀값

    )

	const inSection = () => { // 섹션에 진입했을때 액션을 처리해줄 함수입니다.

        setProperty() // 스크롤할때 변해야할 값들의 변수를 선언한 함수입니다
		if(winScrollTop >= sectionOfffsetTop && winScrollTop <= sectionOffsetBottom){ //해당 섹션의 위치에 도달했는지 체크합니다.

			if(isFunction && !checkInSection){ //실행될 함수가 있고 한번도 실행이 되지 않았다면 실행합니다
				checkInSection = true;
				startFunction(); //스타트 함수 실행
			}

        }

    
    const init = () => ( //최초 한번실행
        inSection() // 섹션에 진입했을때 처리해줄 함수입니다.
    )
    document.querySelector(window).scroll = (e) => (
        inSection() // 섹션에 진입했을때 처리해줄 함수입니다.
    )
    document.querySelector(window).resize = (e) =>( //리사이즈 이벤트를 추가합니다.
        inSection()
    )
    init(); //start
        ('.business').GgangSectionIn=()=>{
            ('.business').addClass('active');
        }
        ('.team').GgangSectionIn=()=>{
            ('.team').addClass('active');
        }
        ('.partner').GgangSectionIn=()=>{
            ('.partner').addClass('active');
        }
        ('.contact').GgangSectionIn=()=>{
            ('.contact').addClass('active');
        }
        /* 네비 리모컨*/
        ('.nav_list .list a').click=(e)=>{
            if(document.querySelector(this).hash.offset()){
                document.animate({
                    scrollTop:document.querySelector(this).hash.offset().top
                }, 500);
            }
    
        }
    
    };

  return (
  <>
    <div class="nav_list">
        <div className="logo">
            <img src={Logo} alt="Logo" height="100%"/>
        </div>
        <ul class="list">
          <li>
            <a href="#business" >Business</a>
          </li>
          <li>
            <a href="#team" >Team</a>
          </li>
          <li>
            <a href="#partner" >Partner</a>
          </li>
          <li>
            <a href="#contact" >Contact Us</a>
          </li>
        </ul>
        <div class="menu_icon">
            <FontAwesomeIcon icon={faBars} size="1.5x" className="btn"/>
        </div>
    </div>
    <Home />
    <Business />
    <Team />
    <Partner />
    <Contact />
  <footer>햐</footer>
  </>
  
  );
  }
export default App;
