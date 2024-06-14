// Question 1 - a - initialize array, subtract first index from last
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages[ages.length - 1] - ages[0];
console.log(ages);
// b
ages.push(34); //add 34 to array
console.log(ages); //print to console
// c
sum = 0; //set variable sum
for (let i = 0; i < ages.length; i++) { //iterate through array and add each index to current sum
    sum += ages[i];
}
avg = sum / ages.length;
console.log(avg)

// Question 2 - a
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // names array
let avghold = 0
for (let index = 0; index < names.length; index++) { // iterate through array and find average length of names
    avghold += names[index].length;
}
let average = avghold / names.length;
console.log(average);


// Question 2 - b
let concatstr = `Names: `; // concatonate names together separated properly
for (let index = 0; index < names.length; index++) {
    if (index == names.length - 1) {
        concatstr += `${names[index]}.`
    } else {
        concatstr += `${names[index]}, `
    }
}

console.log(concatstr);


// Question 3
console.log("You would call array.length - 1"); // This was just log the answer

// Question 4
console.log('You would call index 0');// This was just log the answer

// Question 5
let nameLengths = []; // initialize array
for (let i = 0; i < names.length; i++) { // iterate through previous names array and create an array using the length of the names
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Question 6
let sum6 = 0; // iterate through array adding the lengths together
for (let index = 0; index < nameLengths.length; index++) {
    sum6 += nameLengths[index];

}
console.log(sum6);

// Question 7
function bunchWord(word, n) { // iterate and bunch a word together a set number of times
    let bunch = word;
    for (let index = 1; index < n; index++) {
        bunch += word;

    }
    return bunch;
}
console.log(bunchWord('Hello', 4));

// Question 8
function fullName(firstName, lastName) { // create fullName function by concatonating first and last
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}
console.log(fullName('Andrew', 'Hughes'));

// Question 9
function bool100(array) { //check if the sum of an array of numbers is over 100
    let sumArr = 0;
    for (let index = 0; index < array.length; index++) {
        sumArr += array[index];

    }
    if (sumArr <= 100) {
        return false;
    } else {
        return true;
    }
}
console.log(bool100([2, 5, 90, 4])); //over 100, returns true
console.log(bool100([34, 5])); //under 100, returns false

// Question 10
function arrNumbers(array) { // accepts number array and returns average
    totalAvg = 0;
    tempSum10 = 0;
    for (let index = 0; index < array.length; index++) { // set variables above, iterate and add to sum
        tempSum10 += array[index];

    }
    totalAvg = tempSum10 / array.length; //calculate average
    return totalAvg;
}
console.log(arrNumbers([4, 4, 50, 32, 2])) // log to console

// Question 11
function twoArray(array1, array2) { // calculate averages of two arrays of numbers and check to see if array 1 is greater than array 2
    tempSum1 = 0;
    for (let index = 0; index < array1.length; index++) {
        tempSum1 += array1[index];

    };
    let avgArr1 = tempSum1 / array1.length;

    tempSum2 = 0;
    for (let index = 0; index < array2.length; index++) {
        tempSum2 += array2[index];

    };
    let avgArr2 = tempSum2 / array2.length;

    if (avgArr1 > avgArr2) {
        return true;
    } else {
        return false;
    }
}
console.log(twoArray([3, 5, 10, 2], [4, 4, 4, 4]));

// Question 12
function willBuyDrink(isHotOutside, moneyInPocket) { //Function, if it's hot out AND you have enough money, return true
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 10.51)); //returns true
console.log(willBuyDrink(true, 10.49)); //returns false
console.log(willBuyDrink(false, 10.51)); //returns false

// Question 13 - Create a function that accepts an array of strings, return the total number of characters and the average number per string
// Create function
function stringAnalysis(stringArray) {
    //iterate through and calculate total characters
    let totalChar = 0;
    for (let index = 0; index < stringArray.length; index++) {
        totalChar += stringArray[index].length;

    }
    //use totalChar to calculate average characters
    let avgChar = totalChar / stringArray.length;
    //return an object with two properties: totalChar and avgChar
    return {
        totalChar: totalChar,
        avgChar: avgChar
    }

}
//log example to console
console.log(stringAnalysis(['String', 'Array', 'Let"s see if this works']));



// Question 13-2 - Create a function for an e-commerce platform that collects customer orders
function collectOrders() {
    let orders = []; // initialize orders array
    
    let addOrder = true; // set addOrder to true
    while (addOrder) { //while addOrder is true, run while loop
        let orderName = prompt('Enter product name: \n'); //set variables to be used as properties based on user input
        let orderPrice = parseFloat(prompt('Enter product price: \n'));
        let orderQuantity = parseInt(prompt('Enter quantity: \n'));

        // Create order object using above variables as properties
        let order = {orderName: orderName, orderPrice: orderPrice, orderQuantity: orderQuantity };
        orders.push(order); // Push orders to array

        // Ask user if they have more orders, return true or false
        addOrder = confirm("Do you want to add another order?")

    }

    return orders; // return complete orders array
}

function processOrders(orders) { // create function to process orders and return total price
    return orders.map(order => { // return results of an arrow function which iterates over every element in orders array
        let totalPrice = order.orderPrice * order.orderQuantity; // calculate totalPrice

        //Create a new object for each order
        return {
            orderName: order.orderName,
            orderPrice: order.orderPrice,
            orderQuantity: order. orderQuantity,
            totalPrice: totalPrice
        }
    })
}

let orders = collectOrders(); //Runs collectOrders and stores user input in orders array
let processedOrders = processOrders(orders); //runs processOrders using the returned orders array and returns a new array called processedOrders()
console.log(processedOrders); //prints processedOrders array to the console