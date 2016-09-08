// return the last digit of power no matter how long it is
var lastDigit = function(str1, str2){
  return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
}

var balancedParens = function (input) {
   // stack is an array that will help us keep track of all of our pairs
   var stack = [];
   var pairs = {
     '{':'}',
     '[':']',
     '(':')'
   };
   // we want to loop through each character in the string input
   for (var i = 0; i < input.length; i++){
     // let's set the character we are currently on to a variable to make things cleaner
     var chr = input[i];
     // if we find a character that belongs in a pair, we want to push it to our 'stack' array
     if (pairs[chr]){
       stack.push(chr);
    // else, we chaeck to see if our character is a closing bracket
     } else if (chr === '}' || chr === ']' || chr === ')'){
       // if it is, we want to check if it's matching!
       if (pairs[stack.pop()] !== chr){
         return false;
       }
     }
   }
   //return false if there are any unclosed brackets
   return stack.length === 0;
}

