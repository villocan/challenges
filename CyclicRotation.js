const solution = function(A,K) {
    let B = [];
    let R = K;
    let n=0;
    if (K==A.length) {
        return A;
    }
    if (K>A.length) {
        R=K%A.length;
    }
    for (var k1=R-1 ; k1<=A.length-1 ; k1++) {
        B[n]=A[k1];
        n++
    }
    for (var k2=0 ; k2 <= R-2 ; k2++) {
        B[n]=A[k2];
        n++
    }
    return B;
}
var A1=[3, 8, 9, 7, 6];
var A2=[3, 8, 9, 7, 6];
var A3=[0, 0, 0];
var A4=[1, 2, 3, 4];
console.log(A1,solution(A1,3))
console.log(A2,solution(A2,8))
console.log(A3,solution(A3,1))
console.log(A4,solution(A4,4))