var isDate = function (input) {
  //   write your code here
	return !isNaN(Date.parseInt(input))
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
