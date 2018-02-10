// In JS: Create an array of 5 numbers 
// each with 2 decimal places.

var numArray = [7.77, 10.01, 44.44, 11.11, 22.22]

// In JS: Loop through the array and 
// round all numbers to the nearest whole integer. 
// Add each rounded number to a new array.

for(var i = 0; i < numArray.length; i++) {
	console.log(Math.round(numArray[i]))
}

// In JS: Create a function 
// that produces 10 random 
// numbers between 1 and 100. 
// Add each number to an array of numbers.

var newArray = []

for(var i = 0; i < 10; i++) {
	newArray.push(Math.ceil(Math.random() * 100)
		)
}
console.log(newArray);

// In JS: Write out a function 
// that creates a few variables 
// that stores the following information: 
// the whole date, the current hour, 
// the current minute, and the current second.

function generateDate() {
	let date = new Date();

	var fullDate = date;
	var currentHour = date.getHours();
	var currentMinute = date.getMinutes();
	var currentSecond = date.getSeconds();

	console.log(fullDate, currentHour, 
		currentMinute, currentSecond)
}

generateDate ();

// In JS: Inside the function, 
// create a variable that will display 
// the current time in the hh:mm:ss format.

function generateDate() {
	let date = new Date();

	var fullDate = date;
	var currentHour = date.getHours();
	var currentMinute = date.getMinutes();
	var currentSecond = date.getSeconds();
	
	var hhmmss = currentHour + ":" +
       currentMinute + ":" + currentSecond

   console.log(hhmmss)
}

generateDate();

// In JS: Inside the function, 
// create a few more variables to store 
// the current month, day, and year.

function generateDate() {
	let date = new Date();

	var fullDate = date;
	var currentHour = date.getHours();
	var currentMinute = date.getMinutes();
	var currentSecond = date.getSeconds();
	
	var hhmmss = currentHour + ":" +
       currentMinute + ":" + currentSecond

    var currentDay = date.getDay();
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();

    var ddmmyy = currentDay + ":" + currentMonth
       + ":" + currentYear;

   console.log(ddmmyy)
}

generateDate();

// In JS: Inside the function, 
// create a variable that will display 
// the current date in the dd/mm/yy format.

function generateDate() {
	let date = new Date();

	var fullDate = date;
	var currentHour = date.getHours();
	var currentMinute = date.getMinutes();
	var currentSecond = date.getSeconds();
	
	var hhmmss = currentHour + ":" +
       currentMinute + ":" + currentSecond

    var currentDay = twoDigits(date.getDay());
    var currentMonth = twoDigits(date.getMonth() + 1);
    var currentYear = twoDigits(date.getFullYear());

    var ddmmyy = currentDay + ":" + currentMonth
       + ":" + currentYear;

   console.log(hhmmss, ddmmyy)
}

function twoDigits(number) {
	if(number < 10) {
		return "0" + number;
	}	else {
		return number;
	}
}

generateDate();

// In JS: Write some code that will 
// run this time/date function every second.

setInterval(generateDate, 1000);
