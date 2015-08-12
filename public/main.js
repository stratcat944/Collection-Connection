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
		.when('/view5',{
			templateUrl : '/templates/view5',
			controller 	: 'view5'
		})
		.when('/view6',{
			templateUrl : '/templates/view6',
			controller 	: 'view6'
		})

});





collectConnect.controller('landingPage', function($scope){
	console.log('landingPage Controller!');
})

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

collectConnect.controller('view5', function($scope){
	console.log('View 5 Controller!');
})

collectConnect.controller('view6', function($scope){
	console.log('View 6 Controller!');
})



