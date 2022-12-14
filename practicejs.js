//require
const converters = require("./converters");

//for some reason console will log 55
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

// console.log(sum(range(1, 10)));

//function practice
function celciusToFarenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celciusToFarenheit(freezingPointC);
const boilingPointF = converters.celciusToFarenheit(boilingPointC);

console.log(`The freezing point of water in Farenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Farenheit is ${boilingPointF}`);

//new function practice
function celciusToFarenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

const celciusInput = process.argv[2];
const farenheitValue = celciusToFarenheit(celciusInput);

console.log(
  `${celciusInput} degrees Celcius = ${farenheitValue} degrees Farenheit.`
);
