function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
		for (let j = i+1; j < str.length; j++) {
			if (str[i] != str[j) {
				return str[i];
			}
			else{
				return "null";
			}
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
