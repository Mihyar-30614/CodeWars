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

// my solution
function pigIt(str){
  var array = str.split(" ");
  for (var i = 0; i < array.length; i++) {
  	array[i] = array[i].split("");
  	array[i].push(array[i].shift());
  	array[i].push('ay');
  	array[i] = array[i].join("");
  }
  return array.join(" ");
}

// code war solution 
function pigIt(str){
  return str.split(' ').map(function(word) {
    return word.slice(1) + word[0] + 'ay';
  }).join(' ');
}

// compare two objects values and see how much
function cakes(recipe, available){
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)
}

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

function removeZeros(array) {
  var last = array[array.length-1];
  var limit = array.length;
  for(var i=0; i<limit; i++){
    if (array[i] !== last) {
      if(array[i] === 0){
        var temp = array.splice(i,1);
        array[array.length] = temp[0];
        i--;
      }
    }else{
      return array;
    }
  }
}

function lastDigit(as){
  var result = 1;
  var add = 0;
  for (var i = 0; i < as.length; i++) {
    add += as[i];
  }
  if (add === 0 || add === undefined) {
    return result;
  }
}

function solution(number){
var roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){
           ans += a; 
           number-=roman[a];
            break;
          }    
      }
  }
return ans;
}

function getGoodOldDay(input){
    // return day of week
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    input = input.split("-");
    var date = new Date();
    date.setDate(parseInt(input[0]));
    date.setMonth(parseInt(input[1])-1);
    date.setFullYear(parseInt(input[2]));
    return days[date.getDay()];
};