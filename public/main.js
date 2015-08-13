var collectConnect = angular.module('collectConnect', ['ngResource', 'ngRoute']);

collectConnect.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl	: '/templates/view1', 		// View
			controller 	: 'view1'             // Controller
		})

});


collectConnect.controller('view1', function($scope){
	console.log('View 1 Controller!');
	$scope.createArtistAlbum = function(){
		console.log('create', $scope.artistAlbum);
	}
	$scope.personnel = [{}]
	$scope.addPerson = function(){
		$scope.personnel.push({})
	}
	$scope.tracks = [{}]
	$scope.addTrack = function(){
		$scope.tracks.push({})
	}
})



