// complete the function
function prime (num) {
  // code goes here
  let isPrime;

  if (num <= 1) { // one and numbers less than one are not prime numbers
    return false;
  }
  if (num == 2) { // prime numbers begin from 2
    return true; 
  } 
  
  for(let i = 2; i < num; i++){
    if (num % i === 0) { // checks if i divides with no remainder
        isPrime = false;
        break;  //break after the first true instance 
      }
      else {
        isPrime = true;
    }
  } 
  return isPrime
}


function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
