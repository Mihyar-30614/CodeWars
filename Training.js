function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if(Math.sqrt(sq)=== Math.floor(Math.sqrt(sq)))
  return Math.pow(Math.sqrt(sq)+1,2)
  return -1;
}

function GetSum(a,b){
	if(a>b){
	return GetSum(b,a);
	}
	if(a===b){
		return a;
	}
	return a + GetSum(a+1,b);
}

function getCount(words) {
	var obj ={vowels : 0, consonants : 0};
	for (var i=0;i<words.length;i++){
		if(words[i] === 'i' || words[i] === 'o' || words[i] === 'u' || words[i] === 'e' || words[i]==='a'){
		obj.vowels++;
  	}else if(words[i]!== " "){
	  obj.consonants++;
	  }
	}
  return obj;
}
//My solution
function squareDigits(num){
	var string = num.toString();
	var result = "";
	for (var i = 0; i < string.length; i++) {
		var x = parseInt(string[i])*parseInt(string[i]);
		result+= x.toString();
	}
	return parseInt(result);
}
// Code war solution
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
// my solution 
function alphabetPosition(text) {
var text = text.toLowerCase();
var string="";
 for(var i=0; i<text.length; i++){
 var x = text[i].charCodeAt(0)-96;
 if(/[a-z]/i.test(text[i]))
 string+= x+" ";
 }
 string= string.slice(0,-1)
 return string;
}
// Code war solution 
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g,'')
    .replace(/./g, c => c + " ")
    .replace(/[a-z]/g, c => c.charCodeAt(0) - 96)
    .trim();    
}
// My soltion 
var isSquare = function(n){
		if(n>=0 && Math.sqrt(n)%1 ===0)
		  return true; 
		  return false;
}
// Code war solution 
var isSquare = function(n){
	return Math.sqrt(n)%1 ===0
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

var flatten = function (array){
 	return [].concat.apply([],array)
}

//my solution
 function ipToInt32(dot) 
{
    var d = dot.split('.');
    return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
}

//code wars solution 
function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
}

// my solution 
function duplicateEncode(word){
    var result='';
    var word= word.toLowerCase();
    for(var i=0; i<word.length; i++){
    	var count=0;
    	for (var j = 0; j < word.length; j++) {
    		if(word[j] === word[i])
    			count++
    	}
    	if(count>1)
    		result+= ')'
    	else
    		result+= '('
    }
    return result;
}

//code war solution
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
};

function reverse(str) {
	return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}

var employees =  [{ firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
{ firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
{ firstName: 'Peter',lastName: 'Ross',role: 'Warehouse Manager' },
{ firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
{ firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
{ firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
{ firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
{ firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
{ firstName: 'Peter',lastName: 'Jones',role: 'Warehouse Picker' },
{ firstName: 'Mort',lastName: 'Smith',role: 'Warehouse Picker' },
{ firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
{ firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
{ firstName: 'Colin', lastName: 'Brown', role: 'Trainee' } ];

function findEmployeesRole(name) {
	for (var i = 0; i < employees.length; i++) {
		var fullName = employees[i].firstName + ' ' + employees[i].lastName;
		if (name === fullName){
			return employees[i].role;
		}
	}
	return 'Does not work here!';
};

function sometimes(fn) {
  var count = 0;
  
  return function () {
    count++;
    
    if (count > 3 && count % 2 === 0)
      return 'hmm, I don\'t know!';
    
    return fn.apply(null, arguments);
  };
}

var isPP = function(n){
	var sqrt = Math.sqrt(n);
	for (var i = 1; i < sqrt+1; i++) {
		for (var j = 1; j < sqrt+1; j++) {
				if(Math.pow(i,j) === n)
					return [i,j];
		}
	}
  return null;
}

function iqTest(numbers){
	var splited = numbers.split(" ");
	var odds=0;
	var evens=0;
	for (var i = 0; i < splited.length; i++) {
		if(splited[i]%2 === 0){
			evens++;
		}else{
			odds++;
		}
	}
	if(evens>odds){
		for (var i = 0; i < splited.length; i++) {
			if(splited[i]%2 !==0){
				return ++i;
			}
		}
	}else{
		for (var i = 0; i < splited.length; i++) {
			if(splited[i]%2 === 0)
				return ++i;
		}
	}
}

function round(number){
	var y = number.toString().split(".");
	if(y[1] === undefined)
	return  parseInt(y[0]);
	return parseInt(y[1][0])>=5? parseInt(y[0])+1 : parseInt(y[0])
}

function ceil(number){
	var splited = number.toString().split(".");
	return splited[1] === undefined? parseInt(splited[0]) : parseInt(splited[0])+1;
}

function floor(number){
	var splited = number.toString().split(".");
	return parseInt(splited[0]);
}

function hsbjh(){

	return 
}