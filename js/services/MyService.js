angular.module('MyService', [])

.factory('Test', function($http){
	return{
		call_api : function(){
			url = 'https://jsonplaceholder.typicode.com/posts';
			return $http({
				method: 'GET',
				url: url,
				//headers: { 'Content-Type' : 'application/x-www-form-urlencoded' }
			});
		}
	}
})