//
function classEx(){
 let data =	document.getElementsByTagName('p');
	alert(data.length);
}


//data manupulation
let number1, number2, result;

  number1 = 5;
  number2 = 5;

 result = number1 == number2;

function mData(){
	document.getElementById('m').innerHTML=result;
}

//repeat text
function repeatText(){
	var data = "Welcome to SS";
	document.getElementById('rt').innerHTML=data.repeat(2);
}