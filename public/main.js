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
		.when('/view5',{
			templateUrl : '/templates/view5',
			controller 	: 'view5'
		})

});


collectConnect.controller('view1', function($scope){
	console.log('View 1 Controller!');
	$scope.createArtistAlbum = function(){
		console.log('create', $scope.artistAlbum);
	}
})

collectConnect.controller('view2', function($scope){
	$scope.personnel = [{}]
	$scope.addPerson = function(){
		$scope.personnel.push({})
	}
	$scope.createPerson = function(){
		console.log($scope.personnel);
	}
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



