const solution = function(A,K) {
    const B = A.concat(A);
    const C = [];
    let error1 = (
        typeof(K)!='number' ||
        K<=0 ||
        K>100 ||
        A.length<=0 ||
        A.length>100 ||
        K>=A.length
    );
    let error2 = false;
    A.forEach(x => error2 = error2 || typeof(x)!='number');
    A.forEach(x => error2 = error2 || !(-1000<=x<=1000));
    if (error1 || error2) {
        return A;
    }
    for (var x1=0 ; x1<A.length ; x1++) {
        C[x1]=B[x1+K-1];
    }
    return C;
}
var A1=[3, 8, 9, 7, 6];
var A2=[3, 8, 9, 7, 6];
var A3=[0, 0, 0];
var A4=[1, 2, 3, 4];
var A5=[5,-1000];
var K1 = 3;
var K2 = 6;
var K3 = 1;
var K4 = 4;
var K5 = 0;
console.log(A1,K1,solution(A1,K1))
console.log(A2,K2,solution(A2,K2))
console.log(A3,K3,solution(A3,K3))
console.log(A4,K4,solution(A4,K4))
console.log(A5,K5,solution(A5,K5))