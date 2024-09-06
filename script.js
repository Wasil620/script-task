// ----------------task 1------------------------
// ---------------------BASIC CALCULATOR-------------

        function basicCalculator() {
            // Prompt the user to input two numbers
            let num1 = parseFloat(prompt("Enter the first number:"));
            let num2 = parseFloat(prompt("Enter the second number:"));
            
            // Check if the inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                alert("Invalid input. Please enter numeric values.");
                return;
            }
            
            // Prompt the user to choose an operation
            let operation = prompt("Enter an operation (+, -, *, /):");
            
            // Perform the calculation based on the chosen operation
            let result;
            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    // Check for division by zero
                    if (num2 === 0) {
                        alert("Error: Division by zero is not allowed.");
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    alert("Invalid operation. Please enter one of the following: +, -, *, /.");
                    return;
            }
            
            // Display the result in an alert
            alert("The result is: " + result);
        }
        
        // Call the function to run the calculator
        basicCalculator();


        // ------------------------task 2--------------------

        function simpleGreeting() {
            // Prompt for their name and favorite color
            var name = prompt("Please enter your name:");
            var color = prompt("Please enter your favorite color:");

            // Display the greeting
            alert("Hello " + name + ", I see your favorite color is " + color + "!");
        }
        simpleGreeting();