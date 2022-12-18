console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
//comments:
// use the pop() method to remove the last item from the array index
// declared a new object name removedSupply, because pop will change the original array elements
// then assigned current array (supplyChanges) and append it to the pop method
let removedSupply = supplyChanges.pop();
console.log('4. Removed item:', removedSupply); // print out what we removed from the original array list (supplyChanges)
console.log('Revised supplyChanges list after removed item:', supplyChanges); // print out the updated supplyChanges list after removal

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
//comments:
//use the push() method to add to the last item of the array index
//we do not need to declare a new objectname because it is simply changing the length of the array and returning the new length of it
//take supplyChange append to push method; inside the parentheses push method add the parameters/argument in this case the 25 more parts that arrived, ie...push(25);
supplyChanges.push(25); // accessing the object with 'dot' then push method with parameters (what we're pushing to end of array) inside parenthesis
console.log('5. Adding 25 to supplyChanges.', supplyChanges); // print out the updated array with 25 at end of it

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

for (let i = 0; i < supplyChanges.length; i++) {
  const x = supplyChanges[i]; //`for` loop that shows each value in the 'supplyChanges' array

  if (x > 0) {
    console.log(`Added ${x} parts.`); //if it is a positive number (greater than 0), log 'Added x parts.'
  } else if (x === 0) {
    console.log('No change.'); //if the value is 0, log 'No Change.'
  } else {
    console.log(`Removed ${x} parts.`); //if the value is negative, format the log as 'Removed x parts.'
  }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');

// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for (const supply of supplyChanges) {
  if (supply > 0) {
    console.log(`Added ${supply} parts.`);
  } else if (supply === 0) {
    console.log('No change.');
  } else {
    console.log(`Removed ${supply} parts.`);
  }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
//comments:
//  created a new variable called 'partsAvail' and assigned it to 0 number;
// let starting point (index) begins at 0 index;
//  keeping looping through each value in the supplyChanges array, adding the values as it loop
let partsAvail = 0;
for (let i = 0; i < supplyChanges.length; i++) {
  partsAvail += supplyChanges[i];
}
console.log('8. Total supplies available is:', partsAvail);

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.

console.log('9. Filling boxes with a "while" loop');

let parts = 572; // 572 parts in total
const boxHolds = 7; // box holds 7 parts
let box = 0; // need to determine how many box, right now we don't know so assigning it to 0 as a place holder

// while parts is greater-than-or-equal to boxHolds, we will keep adding parts to boxes
while (parts >= boxHolds) {
  parts -= boxHolds;
  box++;
}

console.log('Boxes that were filled:', box);  // log how many boxes were filled
console.log('Parts that are left over:', parts); // log how many parts are left over
