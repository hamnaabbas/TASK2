// converter.js

/**
 * Converts Celsius to Fahrenheit.
 * Formula: (C * 9/5) + 32
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius.
 * Formula: (F - 32) * 5/9
 */
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Export the functions so test.js can import them
module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius
};
