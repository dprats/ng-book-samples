function MyController($scope,$timeout){
	
	//update clock function
	var updateClock = function(){
		$scope.clock = new Date();
		$timeout(function(){
			updateClock();
		},1000);
	};
	//call update clock
	updateClock();

}