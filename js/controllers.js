//controllers
var myApp = angular.module('myApp', []);

//here's a controller
myApp.controller('MyController', function MyController($scope){
	//here's a model
	$scope.people = [
		{
			'name   ': 'me',
			'title'  : 'web dever',
			'company': 'shoutleaf'
		},
		{
			'name   ': 'me1',
			'title'  : 'web dever1',
			'company': 'shoutleaf1'
		},
		{
			'name   ': 'me2',
			'title'  : 'web dever2',
			'company': 'shoutleaf2'
		},
		{
			'name   ': 'me3',
			'title'  : 'web dever3',
			'company': '333333'
		}
	]
});