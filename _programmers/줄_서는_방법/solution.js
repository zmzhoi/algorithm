function solution(n, k) {
    const factorial = (n) =>  n < 2 ? 1 : n * factorial(n-1);
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const answer = [];
    
    do {
        const numberOfCasePerOne = factorial(arr.length-1);
        const quotient = Math.floor(k / numberOfCasePerOne);
        const remainder = k % numberOfCasePerOne;
        const index = remainder > 0 ? quotient : quotient - 1;
        
        answer.push(...arr.splice(index, 1));
        k = remainder || factorial(arr.length);
    } while(arr.length > 0);
    
    return answer;
}