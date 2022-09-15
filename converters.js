//mode.exports object
function celciusToFarenheit(celcius) {
    return celcius * (9 / 5) + 32;
  }
  
  module.exports.celciusToFarenheit = celciusToFarenheit;
  module.exports.farenheitToCelcius = function (farenheit) {
    return (farenheit - 32) * (5 / 9);
  };