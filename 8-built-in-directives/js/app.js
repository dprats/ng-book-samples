var app = angular.module('myApp',[]);

app.controller('LotteryController', function($scope) {

	$scope.generateNumber = function(){

		return Math.floor((Math.random()*10)+1);

	};

});
