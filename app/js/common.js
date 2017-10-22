"use strict";

// var language = ["C#", "PHP", "JavaScript"];
// language[2] = " ";
// language.pop();
// console.log(language);
// console.log(language.length);


// var arr = [1, 2, 3];
// var arr2 = arr;
// arr2[0] = 5;
// console.log( arr[0] ); //5
// console.log( arr2[0] ); //5


// var o = {a:5, b:true};
// for(var key in o) {
// 	console.log(key + ":" + o[key]);
// }


// var goods = ["foods","fruits","technics","phones","computers"];
// console.log(goods[goods.length - 1]);


// var user = {
// 	100 : "info",
// 	firstName : "John",
// 	name : "Peterson",
// 	age : 25,
// 	status : true,
// 	info : "English",
// 	10 : "AnotherNumber",
// 	3 : false
// }

// for(k in user) {
// 	console.log(k);
// }


// var salaries = {
// 	"Вася" : 100,
// 	"Петя" : 300,
// 	"Даша" : 250
// };

// var summ = 0;
// for(var cost in salaries) {
// 	summ += salaries[cost] * 1.2;
// }
// console.log(summ);


// var summ = 0;
// Object.keys(salaries).forEach( function(element, index) {
// 	summ += salaries[element] * 1.2;
// });
// console.log(summ);


// var user = {};
// console.log(user);
// user.name = "John";
// console.log(user);
// user.surname = "Smithson";
// console.log(user);
// user.name = "Иван";
// console.log(user);
// delete user.name;
// console.log(user);


// var fruit = ["апельсин", "банан", "груша"];
// console.log(fruit.length);
// fruit.push("яблоко", "ананас");
// fruit.unshift("грейпфрут");
// console.log(fruit);
// console.log(fruit.length);
// fruit.shift();
// fruit.pop();
// console.log(fruit);
// console.log(fruit.length);


var menu = {
	width: 200,
	height: 300,
	title: "menu title"
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(menu) {
	for(var key in menu) {
		if ( isNumeric(menu[key]) ) {
			menu[key] = menu[key] * 2;
		}
	}

}

multiplyNumeric(menu);
console.log(menu);























// var user = {
// 	firstName : 'Alexey',
// 	lastName : 'Lukashevich'
// };
// user.middleName = 'Victorovich';

// console.log(user);

// delete user.middleName;
// console.log(user);

// var showProperty = function(obj, propName) {
// 	console.log(obj[propName]);
// 	console.log(obj.propName);
// };

// var user = {
// 	firstName : 'Alexey',
// 	lastName : 'Lukashevich'
// };

// showProperty(user, 'firstName');

// var user = {
// 	firstName: function() {
// 		return "Hello";
// 	},
// 	lastName: function() {
// 		return "World"
// 	}
// };

// console.log( user.firstName() + " " + user['lastName']() );

// var user = [
// 	{
// 		firstName : 'Alexey',
// 		lastName : 'Lukashevich',
// 		birthDay : '22/06/1991',
// 		language : 'English'
// 	},
// 	{
// 		firstName : 'Alexey',
// 		lastName : 'Lukashevich',
// 		birthDay : '22/06/1991',
// 		language : 'English'
// 	},
// 	{
// 		firstName : 'Alexey',
// 		lastName : 'Lukashevich',
// 		birthDay : '22/06/1991',
// 		language : 'English'
// 	}
// ];

// var user = {
// 	firstName : 'Alexey',
// 	lastName : 'Lukashevich',
// 	info: {
// 		birthDay : '22/06/1991',
// 		language : 'English'
// 	}
// };

// var user = {
// 	firstName : 'Alexey',
// 	lastName : 'Lukashevich',
// 	birthDay : '22/06/1991',
// 	language : 'English'
// };

// console.log(user);

// for(var key in user) {
// 	console.log('Key: ' + key + ' Value: ' + user[key]);
// }

// Object.keys(user).forEach( function(index) {
// 	console.log(user[index]);
// });

// var keys = Object.keys(user); // ["firstName", "lastName", "birthDay", "language"]
// keys.forEach( function(element, index) {
// 	console.log(element + ":" + user[element]);
// });

// Object.keys(user).forEach( function(element, index) {
// 	console.log(user[element]);
// });

// var original = {number : "777"};
// var linked = original.number;
// original.number = "888";
// console.log(linked);

// var original = {number : "777"};
// var linked = original;
// original.number = "888";
// console.log(linked.number);


// var original = {
// 	number : "777"
// };
// console.log(original);
// function changeObject(item) {
// 	var newObject = {};
// 	newObject.number = item.number;
// 	newObject.number = 888;
// }
// changeObject(original);
// console.log(original);


// var list = ["first", "second", "third"];
// list.push("push");
// console.log(list);
// list.shift();
// console.log(list);
// list.pop();
// console.log(list);

// var list = ["first", "second", "third"];
// list.unshift("zero");
// console.log(list);
// list.push("last");
// console.log(list);


// var list = ["first", "second", "third"];
// console.log( list.indexOf("second") ); // 1
// console.log( list.indexOf("sdfsd") ); // -1


// var list = "first, second, third";
// var listArr = list.split(", ");
// console.log(listArr);

// var list = "first,second,third";
// var listArr = list.split(", ");
// console.log(listArr);

// var list = ["first", "second", "third"];
// var line = list.join(", ");
// console.log(line);

// var list = ["1", "2", "3", "4", "5", "6", "7"];
// var line = list.splice(3, 2);
// console.log(line); 

// var list = ["1", "2", "3", "4", "5", "6", "7"];
// list.reverse();
// console.log( list );

// var list = ["0", "1", "2", "3", "4"];
// var list2 = ["5", "6", "7", "8", "9"];
// console.log(list);
// console.log(list2);
// var line = list.concat(list2);
// console.log(line);


// var store = [];
// store[100] = "Привет";
// console.log(store);
// console.log(store.length); //101

// for(var key in store) {
// 	console.log('Key: ' + key + ' Value: ' + store[key]);
// }


// var list = ["1", "2", "3", "4", "5", "6", "7"];
// list.forEach( function(element, index) {
// 	console.log(index + ":" +element);
// });

// var result = list.map(function(element, index) {
// 	return element + "-updated";
// });

// console.log(result);


// function isBigEnough(value) {
//   return value != "4" && value != "1";
// }
// var list = ["1", "2", "3", "4", "5", "6", "7"].filter(isBigEnough);
// console.log(list);



// var list = ["1", "2", "3", "4", "5", "6", "7"];
// list = list.filter(function(value) {
// 	return value.toString() > 2 && value.toString() < 6 ;
// });
// console.log(list);


$(function() { 

	// Custom JS

});