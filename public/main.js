var collectConnect = angular.module('collectConnect', ['ngResource', 'ngRoute']);

collectConnect.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl	: '/templates/view1', 		// View
			controller 	: 'view1'             // Controller
		})

});


collectConnect.controller('view1', function($scope, $http){
	console.log('View 1 Controller!');
	$scope.album = {}


	$scope.album.personnel = [{}]
	$scope.addPerson = function(){
		$scope.album.personnel.push({})
	}


	$scope.album.tracks = [{}]
	$scope.addTrack = function(){
		$scope.album.tracks.push({})
	}


	$scope.createAlbum = function(){
		console.log('create', $scope.album);
		$http.post('/albums/create', $scope.album)
		.then(function(returnData){
			console.log(returnData);
			
			$scope.album = {
				personnel:[{}],
				tracks: [{}]
			}
			
		})
	}
})



