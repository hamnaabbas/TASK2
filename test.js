// test.js

const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converter.js');

let failedTests = 0;

// Helper function to run a test
function runTest(testName, expected, actual) {
  if (expected === actual) {
    console.log(`✅ Test Passed: ${testName} (Expected: ${expected}, Got: ${actual})`);
  } else {
    console.error(`❌ Test FAILED: ${testName} (Expected: ${expected}, Got: ${actual})`);
    failedTests++;
  }
}

console.log("--- Running Temperature Converter Tests ---");

// Test Case 1: 0°C → 32°F
runTest("0°C to Fahrenheit", 32, celsiusToFahrenheit(0));

// Test Case 2: 100°C → 212°F
runTest("100°C to Fahrenheit", 212, celsiusToFahrenheit(100));

// Test Case 3: 212°F → 100°C
runTest("212°F to Celsius", 100, fahrenheitToCelsius(212));

console.log("-------------------------------------------");

// Check if any tests failed
if (failedTests > 0) {
  console.error(`\n${failedTests} test(s) FAILED. Build failed.`);
  process.exit(1); // Exit with a non-zero status code to indicate failure
} else {
  console.log("\nAll tests PASSED. Build successful. ✅");
  process.exit(0); // Exit with 0 to indicate success
}
