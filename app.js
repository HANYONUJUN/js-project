// const(상수) -> 변하지 않는 값 
// let(변수) -> 새로운 것을 생성할 때 사용하기도 하는 것
// var -> 업데이트에 대한 부분을 언어가 알려주지 않음
// null -> 변수에 아무것도 없다는 것을 뜻함(자연적으로 발생하는 값이 아님)
// undefined -> 정의되지 않음(변수가 메모리상엔 있지만 정의되진 않음)
// function -> 하나의 함수 즉 여러 코드에서 중복으로 사용할 수 있는 조각같은 부분
// const age = parseInt(prompt("How old are you?")); <-number로 받음
//js와 html은 서로 연결되어 있음
// html에서 id에 값을 줘 js에서 그 id값을 가져와 내용을 변경할 수 있음
// getElementsByTagName == anchor, section, button같은 것들을 의미
// querySelector는 element를 css 방식으로 검색 가능 -> const title = document.querySelector(".hello h1");


 const h1 = document.querySelector("div.hello:first-child h1");

 function handleTitleClick() {

    const currentColor = h1.style.color;
    let newColor;
    
    if( currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
 }

h1.onclick = handleTitleClick;



// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
// window event -> 좀 더 강력하게 동작하는 event

//event function을 통해 title을 click 했을 경우 event function에 있는 내용 or 효과들이 작동

