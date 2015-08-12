var collectConnect = angular.module('collectConnect', ['ngResource', 'ngRoute']);

collectConnect.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl	: '/templates/view1', 		// View
			controller 	: 'view1'             // Controller
		})
		.when('/view1',{
			templateUrl	: '/templates/view1', 		// View
			controller 	: 'view1'             // Controller
		})
		.when('/view2',{
			templateUrl : '/templates/view2',
			controller 	: 'view2'
		})
		.when('/view3',{
			templateUrl : '/templates/view3',
			controller 	: 'view3'
		})
		.when('/view4',{
			templateUrl : '/templates/view4',
			controller 	: 'view4'
		})

});


collectConnect.controller('view1', function($scope){
	console.log('View 1 Controller!');
})

collectConnect.controller('view2', function($scope){
	console.log('View 2 Controller!');
})

collectConnect.controller('view3', function($scope){
	console.log('View 3 Controller!');
})

collectConnect.controller('view4', function($scope){
	console.log('View 4 Controller!');
})



