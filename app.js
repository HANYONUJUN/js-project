// const(상수) -> 변하지 않는 값 
// let(변수) -> 새로운 것을 생성할 때 사용하기도 하는 것
// var -> 업데이트에 대한 부분을 언어가 알려주지 않음
// null -> 변수에 아무것도 없다는 것을 뜻함(자연적으로 발생하는 값이 아님)
// undefined -> 정의되지 않음(변수가 메모리상엔 있지만 정의되진 않음)
// function -> 하나의 함수 즉 여러 코드에서 중복으로 사용할 수 있는 조각같은 부분

const calculator = {
    add : function (a,b){
        console.log(a+b);
    },
    mius : function (a,b) {
        console.log(a-b);
    },
    div: function(a,b) {
        console.log(a/b);
    } ,
    powerof: function(a,b) {
        console.log(a**b);
    }
}

calculator.add(1,2);
calculator.mius(4,2);
calculator.div(5,1);
calculator.powerof(1,2);

