var collectConnect = angular.module('collectConnect', ['ngResource', 'ngRoute']);

collectConnect.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl	: '/templates/landingpage', // View
			controller 	: 'landingPage'             // Controller
		})
		.when('/view1',{
			templateUrl : '/templates/view1',
			controller 	: 'view1'
		})

});





collectConnect.controller('landingPage', function($scope){
	console.log('Controller!')
})

collectConnect.controller('view1', function($scope){
	console.log('View 1 Controller!')
})