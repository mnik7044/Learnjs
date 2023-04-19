// 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.

const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const count = (sentence.match(/love/gi) ).length;
console.log(count); 
