var pets = ['cat','dog','rat'];
/*
// Checking characters of the strings
console.log(pets[1]);
console.log("Testing pets[1][0]");
console.log(pets[1][0]);
console.log(pets[1].charAt(pets[1].length-1));
console.log(pets[1][pets[1].length-1]);
*/

for (var i = 0; i < pets.length; i++) {
	pets[i] = pets[i] + 's';
};
console.log(pets);