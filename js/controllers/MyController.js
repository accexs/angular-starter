angular.module('MyController', 
	[
		'MyService'
	])

.controller('TestController', function($scope, Test){

	
	Test.call_api()
		.then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.output = response.data;
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			$scope.output = response.data;
		});

})