console.log("godnik")

let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0,2))
console.log(challenge.substring(3,21))
console.log(challenge.includes('Script'))

console.log(challenge.split(' '))

console.log(challenge.replace('30','Python'))

console.log(challenge.charAt(15))
console.log(challenge.indexOf('a'))
console.log(challenge.search('Days'))
console.log(parseFloat(9.8))

const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const count = (sentence.match(/love/gi) ).length;
console.log(count); 
