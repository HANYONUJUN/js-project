// const(상수) -> 변하지 않는 값 
// let(변수) -> 새로운 것을 생성할 때 사용하기도 하는 것
// var -> 업데이트에 대한 부분을 언어가 알려주지 않음
// null -> 변수에 아무것도 없다는 것을 뜻함(자연적으로 발생하는 값이 아님)
// undefined -> 정의되지 않음(변수가 메모리상엔 있지만 정의되진 않음)
// function -> 하나의 함수 즉 여러 코드에서 중복으로 사용할 수 있는 조각같은 부분
// const age = parseInt(prompt("How old are you?")); <-number로 받음

const age = parseInt(prompt("How old are you?"));

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false

if(isNaN(age) || age < 0 ){
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if (age >=18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You con do whatever you want.");
}


