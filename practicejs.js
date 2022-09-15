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

const freezingPointF = celciusToFarenheit(freezingPointC);
const boilingPointF = celciusToFarenheit(boilingPointC);

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

//mode.exports object
function celciusToFarenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

module.exports.celciusToFarenheit = celciusToFarenheit;
module.exports.farenheitToCelcius = function (farenheit) {
  return (farenheit - 32) * (5 / 9);
};
