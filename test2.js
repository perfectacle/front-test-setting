// 변수 a에는 타입을 추론해서 number 형이 할당돼서 숫자 이외에는 어떠한 값도 저장할 수 없다.
let a = 1;
a = '1';
a = {};

/**
 * 문자열을 숫자로 반환하는 함수
 * @param val{string} 숫자 문자열
 * @return {number} 숫자
 */
const b = val => [val];

// 사용자의 마이웨이는 막지 못함.
b('1').call(null, 1, 2, 3);