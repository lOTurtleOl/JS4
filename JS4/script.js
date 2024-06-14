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
    nameLengths.push(names[i].length) ;
}
console.log(nameLengths);
