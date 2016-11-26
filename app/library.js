module.exports={
computeAverage: function(num1, num2, num3){
	return (num1+num2+num3)/3;
},

computeFactorial: function(num){
	var factorial = 1;
	for(var i = 1; i<= num; i++){
		factorial*=i;
	}
	return factorial;
},

convertTempCtoF: function(num){
	return (num * (9/5)) + 32;
},
convertTempFtoC: function(num){
	return((num - 32) * (5/9));
},

computeLargest: function(myArray){
	var max = myArray[0];
	for(var i =0; i<myArray.length; i++){
		if(max < myArray[i]){
			max = myArray[i]
		}
	}
	return max
}
}