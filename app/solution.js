module.exports={
aritGeo:	function(arr){
		if (arr.length > 0){
			if (arr.length > 1){
				var res = -1
				for(var i = 1; i < arr.length-1; i++){
					a = arr[i-1];
					a2 = arr[i];
					d = a2 - a;
					if (a[i+1] == [a2 + d]){
						result = 'arithmetic';
						continue;
					}
					else if(a[i+1] == (d*3)){
						result = 'geometric';
						continue;
					}
					else{
						result = -1;
						break;
					}

			}
				}
				else{
					return -1;
				}
		}
		else{
			return 0;
		}
	}
	return result;
}