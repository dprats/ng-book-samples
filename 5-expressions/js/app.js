
var app = angular.module('app',);


app.controller('MyController', function($scope,'EmailParser'){

	$scope.$watch('emailBody', function(body){

		if (body){
			$scope.previewText = EmailParser.parse(body, {
				to: $scope.to
			});
		}
	});
});
