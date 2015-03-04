angular.module('app.controllers', ['app.services'])
.controller('homeCtrl', function($scope) {

})
.controller('loginCtrl', function($scope, $http, $state, validateService, objectLog) {

	$scope.loginSubmit = function(username, password) {
		$scope.validateFunc = validateService(username, password);
		$scope.emailErrorMsg = $scope.validateFunc.errorObject.email;
		$scope.passwordErrorMsg = $scope.validateFunc.errorObject.password;
		$scope.logObject = objectLog($scope.validateFunc);
		if($scope.validateFunc.loginTracker.success) {
			var htmlCredentials = {
				identifier: $scope.validateFunc.loginTracker.identifier,
				password: $scope.validateFunc.loginTracker.password
			};
			$http.post('/auth/local', htmlCredentials)
			.success(function(res) {
				console.log('Success!');
				console.log(res);

				if(res.success) {
					$state.go('dashboard');
				}
				else {
					$scope.emailErrorMsg = res.errors;
				}
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	};
})
.controller('registerCtrl', function($scope, $http, $state, validateService, objectLog) {

	$scope.loginSubmit = function(username, password) {
		$scope.validateFunc = validateService(username, password);
		$scope.emailErrorMsg = $scope.validateFunc.errorObject.email;
		$scope.passwordErrorMsg = $scope.validateFunc.errorObject.password;
		$scope.logObject = objectLog($scope.validateFunc);
		if($scope.validateFunc.loginTracker.success) {
			var registerObj = {
				username: $scope.validateFunc.loginTracker.username,
				email: $scope.validateFunc.loginTracker.username,
				password: $scope.validateFunc.loginTracker.password
			};
			$http.post('/auth/local/register', registerObj)
			.success(function(res) {
				console.log('Success!');
				console.log(res);

				if(res.success) {
					$state.go('dashboard');
				}
				else {
					$scope.emailErrorMsg = res.errors;
				}
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	};
})
.controller('dashboardCtrl', function() {

})
.controller('assignmentCtrl', function() {

});