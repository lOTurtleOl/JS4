// Question 1 - a
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
names.forEach(element => {
    console.log(element);
});


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
