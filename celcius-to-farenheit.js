const { celciusToFarenheit } = require('./converters');

const celciusInput = process.argv[2];
const farenheitValue = celciusToFarenheit(celciusInput);

console.log(`${celciusInput} degrees Celcius = ${farenheitValue} degrees Farenheit.`);