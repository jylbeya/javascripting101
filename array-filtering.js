var numbers = [];
for (var i = 1; i < 11; i++) {
	numbers.push(i)
}

var filtered = numbers.filter(evenNumbers);

function evenNumbers(number){
	return number % 2 ===0;
}
console.log(filtered);