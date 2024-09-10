// Input computeAmount().lacs(15).core(5).core(2).lacs(20).thousand(45).core(7).value())
//OutPut -> 143545000

// "use strict",
// Define the computeAmount function
function computeAmount() {
    let total = 0; // Initialize total to 0

    // Return an object with the methods crore, lacs, thousand, and value
    return {
        // Method crore adds a number multiplied by 10,000,000 to the total
        crore: function(num) {
            total += num * 10000000; // Convert crores to actual value
            return this; // Return the object itself for method chaining
        },
        // Method lacs adds a number multiplied by 100,000 to the total
        lacs: function(num) {
            total += num * 100000; // Convert lacs to actual value
            return this; // Return the object itself for method chaining
        },
        // Method thousand adds a number multiplied by 1,000 to the total
        thousand: function(num) {
            total += num * 1000; // Convert thousands to actual value
            return this; // Return the object itself for method chaining
        },
        // Method value returns the total amount
        value: function() {
            return total; // Return the total amount
        }
    };
}

// Usage example
console.log(computeAmount().crore(1).lacs(1).thousand(1).value()); // Output: 10110000

// computeAmount().lacs(15).core(1).thousand(1).value();
