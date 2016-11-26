module.exports={

Min-Max: function(arr){
	if(arr.length > 0){
		var min = arr[0];

		var max = arr[0];
		for(var i = 1, i < arr.length; i++){
			if (min > arr[i]){
				min = arr[i];
			}
			if(max < arr[i]){
				max = arr[i];
			}
		}
		else{
			return arr
		}
	}
	return [min, max];
}
}