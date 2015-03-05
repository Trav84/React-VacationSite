angular.module('app.controllers', ['app.services'])
.controller('homeCtrl', function($scope) {

})
.controller('loginCtrl', function($scope, $http, $state, validateService, objectLog, errorMessageSort) {

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
				if(res.errors.length > 0) {
					$scope.loginErrorArray = errorMessageSort(res.errors[0]);
				}
				if(res.success) {
					$state.go('dashboard');
				}
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	};
})
.controller('registerCtrl', function($scope, $http, $state, validateService, objectLog, errorMessageSort) {

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
				if(res.errors.length > 0) {
					$scope.loginErrorArray = errorMessageSort(res.errors[0]);
				}
				if(res.success) {
					$state.go('dashboard');
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
.controller('assignmentCtrl', function($scope, verify) {
	$scope.assignmentSubmit = function(assignment) {
		$scope.assign = verify($scope.assignment);
		if($scope.assign.valid) {
			console.log($scope.assign);
		}
	};
});