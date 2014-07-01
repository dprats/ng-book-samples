function MyController($scope,$timeout){
	
	//update clock function
	var updateClock = function(){
		$scope.clock = {
			now:  new Date()
		}

		$timeout(function(){
			updateClock();
			console.log($scope.clock.now);
		},1000);
	};
	//call update clock
	updateClock();

}