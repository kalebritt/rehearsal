let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

// console.log(sum(range(1, 10)));

function celciusToFarenheit(celcius) {
    return celcius * (9/5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celciusToFarenheit(freezingPointC);
const boilingPointF = celciusToFarenheit(boilingPointC);

console.log(`The freezing point water is ${freezingPointF}`);
console.log(`The boiling point of water is ${boilingPointF}`);