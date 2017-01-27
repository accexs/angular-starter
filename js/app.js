var testApp = angular.module('testApp',
	[
		'MyController',
		'ui.router',
		'ngAnimate'
	]);

testApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('test', {
			url: '/test',
			templateUrl: '/_partials/_partial.html',
			controller: 'TestController'
		});
});