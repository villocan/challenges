const solution = function(A) {
    for (i in A) {
        const B = A.filter(element=>{
            return element == A[i];
        })
        if (B.length<2) {
            return A[i];
        }
    }
    return A;
}
console.log(solution([9, 3, 9, 3, 9, 7, 9, 7, 5]))