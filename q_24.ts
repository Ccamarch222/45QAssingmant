/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If
f you want to try more comparisons, write more tests. Have at least one True and one False result
 for each of the following:*/


 //Tests for equality and inequality with strings
 // Utility function to print test results
function printTestResult(description: string, result: boolean) {
    console.log(`${description}: ${result}`);
    
  }
  const str1: string = "hello";
const str2: string = "world";
  
 // Tests for equality and inequality with strings
printTestResult('String equality (true)', str1 === "hello");
printTestResult('String equality (false)', str1 === str2);
printTestResult('String inequality (true)', str1 !== str2);
printTestResult('String inequality (false)', str1 !== "hello");

// Tests using the lower case function
printTestResult('Lower case equality (true)', str1.toLowerCase() === "hello");
printTestResult('Lower case equality (false)', str1.toLowerCase() === "HELLO");
printTestResult('Lower case inequality (true)', str1.toLowerCase() !== "HELLO");
printTestResult('Lower case inequality (false)', str1.toLowerCase() !== "hello");

// Numerical tests
const num1: number = 10;
const num2: number = 20;

printTestResult('Numerical equality (true)', num1 === 10);
printTestResult('Numerical equality (false)', num1 === num2);
printTestResult('Numerical inequality (true)', num1 !== num2);
printTestResult('Numerical inequality (false)', num1 !== 10);
printTestResult('Greater than (true)', num2 > num1);
printTestResult('Greater than (false)', num1 > num2);
printTestResult('Less than (true)', num1 < num2);
printTestResult('Less than (false)', num2 < num1);
printTestResult('Greater than or equal to (true)', num1 >= 10);
printTestResult('Greater than or equal to (false)', num1 >= num2);
printTestResult('Less than or equal to (true)', num1 <= num2);
printTestResult('Less than or equal to (false)', num2 <= num1);

// Tests using "and" and "or" operators
printTestResult('Logical AND (true)', num1 > 5 && num2 > 15);
printTestResult('Logical AND (false)', num1 > 15 && num2 > 25);
printTestResult('Logical OR (true)', num1 > 5 || num2 > 25);
printTestResult('Logical OR (false)', num1 > 15 || num2 > 25);

// Test whether an item is in an array
const fruits: string[] = ["apple", "banana", "cherry"];
printTestResult('Item in array (true)', fruits.includes("banana"));
printTestResult('Item in array (false)', fruits.includes("grape"));

// Test whether an item is not in an array
printTestResult('Item not in array (true)', !fruits.includes("grape"));
printTestResult('Item not in array (false)', !fruits.includes("banana"));