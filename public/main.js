var collectConnect = angular.module('collectConnect', ['ngResource', 'ngRoute']);

collectConnect.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl	: '/templates/view1', 		// View
			controller 	: 'view1'             // Controller
		})
		.when('/profile',{
			templateUrl : '/templates/profilePage',
			controller  : "profile", 
		})

});


collectConnect.controller('view1', function($scope, $http, $location){
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
			$location.url('/profile')
		})
	}
})

collectConnect.controller('profile', function($scope, $http){
	console.log('profile view');
	$scope.page = 0
	$http.get('/albums')
	.then(function(returnData){
		console.log('return data?', returnData);
		$scope.profile = returnData.data;
	})
	$scope.prevRecord = function(){
		if ($scope.page > 0){
			$scope.page--
		};
	}
	$scope.nextRecord = function(){
		if ($scope.page < $scope.profile.length-1){
			$scope.page++;
		}
	}
})



