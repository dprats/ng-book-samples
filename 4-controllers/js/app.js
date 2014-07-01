
var app = angular.module('app',[]);

app.controller('FirstController', function($scope){
	// $scope.message = 'hello';

	$scope.counter =0;
	$scope.add = function(val){
		$scope.counter += val;
	}
	$scope.subtract = function(val){
		$scope.counter -= val;
	}

});

app.controller('MyController', function($scope){

	$scope.onLogin = function(user){
		UserSrv.runLogin(user);
	}

	
});

app.controller('ParentController', function($scope){
	$scope.person = {greeted: false}

});

app.controller('ChildController', function($scope){

	$scope.sayHello = function(){
		$scope.person.name = "Diego P";
	}

});