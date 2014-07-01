var app = angular.module('myApp',[]);

app.controller('signupController', function($scope) {
		$scope.submitted = false;
		// $scope.signup_form.submitted = true;
		$scope.signupForm = function(){
			if ($scope.signup_form.$valid){
				//submit as normal
				console.log('IF');
			} else {
				$scope.signup_form.submitted = true;
				console.log('else');
			}
		}
});





// app.directive('ensureUnique', function(){

// 	return {
// 		require: 'ngModel',
// 		link: function(scope, ele, attrs, c){
// 			scope.$watch(attrs.ngModel, function(n){
// 				if (!n){
// 					return;
// 				}
// 				$http({
// 					method: 'POST',
// 					url: '/api/check/'+attrs.ensureUnique,
// 					data: {
// 						field: attrs.ensureUnique,
// 						value: scope.ngModel
// 					}
// 				}).success(function(data){
// 					c.$setValidity('unique', data.isUnique);
// 				}).error(function(data){
// 					c.$setValidity('unique', false);
// 				});
// 			});
// 		}
// 	};
// });