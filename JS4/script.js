// Question 1 - a - initialize array, subtract first index from last
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages[ages.length - 1] - ages[0];
console.log(ages);
// b
ages.push(34);
console.log(ages);
// c
sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
avg = sum / ages.length;
console.log(avg)

// Question 2 - a
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let avghold = 0
for (let index = 0; index < names.length; index++) {
    avghold += names[index].length;
}
let average = avghold / names.length;
console.log(average);


// Question 2 - b
let concatstr = `Names: `;
for (let index = 0; index < names.length; index++) {
    if (index == names.length - 1) {
        concatstr += `${names[index]}.`
    } else {
        concatstr += `${names[index]}, `
    }
}

console.log(concatstr);


// Question 3
console.log("You would call array.length - 1");

// Question 4
console.log('You would call index 0');

// Question 5
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Question 6
let sum6 = 0;
for (let index = 0; index < nameLengths.length; index++) {
    sum6 += nameLengths[index];

}
console.log(sum6);

// Question 7
function bunchWord(word, n) {
    let bunch = word;
    for (let index = 1; index < n; index++) {
        bunch += word;

    }
    return bunch;
}
console.log(bunchWord('Hello', 4));

// Question 8
function fullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}
console.log(fullName('Andrew', 'Hughes'));

// Question 9
function bool100(array) {
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
function arrNumbers(array) {
    totalAvg = 0;
    tempSum10 = 0;
    for (let index = 0; index < array.length; index++) {
        tempSum10 += array[index];

    }
    totalAvg = tempSum10 / array.length;
    return totalAvg;
}
console.log(arrNumbers([4, 4, 50, 32, 2]))

// Question 11
function twoArray(array1, array2) {
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
function willBuyDrink(isHotOutside, moneyInPocket) {
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

// Question 13-2 - Create a function for an e-commerce platform that analyzes customer orders
orders = [
    {orderName = 'Laptop'}
]
function ordersArray(orders) {
    let newOrders = [];
    
}