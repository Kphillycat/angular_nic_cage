var nicCageApp = angular.module('nicCageApp', []);

nicCageApp.controller('NicListCtrl', function($scope, $http){
	$http.get('nics/nics.json').success(function(data){
		$scope.nics = data;
	});
	$scope.orderProp = 'name'; //Give orderProp default
});