//controllers
var myApp = angular.module('myApp', []);

//here's a controller
myApp.controller('MyController', function MyController($scope, $http){

	$http.get('js/people.json').success(function(data){
		//here's a model
		$scope.people = data;
	});
});