angular.module('app.controllers', ['app.services'])
.controller('homeCtrl', function($scope) {

})
.controller('loginCtrl', function($scope, validateService, objectLog) {

	$scope.loginSubmit = function(username, password) {
		$scope.validateFunc = validateService(username, password);
		$scope.emailErrorMsg = $scope.validateFunc.errorObject.email;
		$scope.passwordErrorMsg = $scope.validateFunc.errorObject.password;
		$scope.logObject = objectLog($scope.validateFunc);
	};
})
.controller('registerCtrl', function($scope, validateService, objectLog) {

	$scope.loginSubmit = function(username, password) {
		$scope.validateFunc = validateService(username, password);
		$scope.emailErrorMsg = $scope.validateFunc.errorObject.email;
		$scope.passwordErrorMsg = $scope.validateFunc.errorObject.password;
		$scope.logObject = objectLog($scope.validateFunc);
	};
});