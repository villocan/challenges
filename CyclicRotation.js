const solution = function(A,K=0) {
    let B = [];
    if (K==A.length) {
        return A;
    }
    if (typeof(K) != 'number') {
        return A;
    }
    if (!(0 <= K <= 100)) {
        return A;
    }
    if (typeof(A) != 'object') {
        return A;
    }
    if (!(0 <= A.length <= 100)) {
        return A;
    }
    for (var N=0 ; N<A.length ; N++) {
        if (typeof(A[N])!='number') {
            return A;
        }
        if (!(-1000<=A[N]<=1000)) {
            return A;
        }
    }
    if (K>A.length) {
        return A;
    }
    B=A.slice(K-1,A.length);
    B=B.concat(A.slice(0,K-1));
    return B;
}
var A1=[3, 8, 9, 7, 6];
var A2=[3, 8, 9, 7, 6];
var A3=[0, 0, 0];
var A4=[1, 2, 3, 4];
var A5=[5,-1000];
console.log(A1,solution(A1,3))
console.log(A2,solution(A2,8))
console.log(A3,solution(A3,1))
console.log(A4,solution(A4,4))
console.log(A5,solution(A5))