angular.module('app.controllers', [])
.controller('homeCtrl', function($scope) {

})
.controller('loginCtrl', function($scope) {

	var emailPass = false;
	var passPass = false;
	var loginObject = {};
	$scope.emailErrorMsg = false;
	$scope.passwordErrorMsg = false;

	$scope.emailChanged = function(username) {
		if(validator.isEmail(username)) {
			emailPass = true;
			$scope.emailErrorMsg = false;
		} else {
			$scope.emailErrorMsg = true;
			emailPass = false;
		}
	};
	$scope.passwordChanged = function(password) {
		if(validator.isNull(password)) {
			$scope.passwordErrorMsg = true;
			passPass = false;
		} 
		else {
			passPass = true;
			$scope.passwordErrorMsg = false;
		}
	}

	$scope.loginSubmit = function(username, password) {
		if(emailPass && passPass) {
			loginObject = {
				identifier: username,
				password: password
			};
		}
		console.log(loginObject);
	};
})
.controller('registerCtrl', function($scope) {

	var emailPass = false;
	var passPass = false;
	var loginObject = {};
	$scope.emailErrorMsg = false;
	$scope.passwordErrorMsg = false;

	$scope.emailChanged = function(username) {
		if(validator.isEmail(username)) {
			emailPass = true;
			$scope.emailErrorMsg = false;
		} else {
			$scope.emailErrorMsg = true;
			emailPass = false;
		}
	};
	$scope.passwordChanged = function(password) {
		if(validator.isNull(password)) {
			$scope.passwordErrorMsg = true;
			passPass = false;
		} 
		else {
			passPass = true;
			$scope.passwordErrorMsg = false;
		}
	}

	$scope.loginSubmit = function(username, password) {
		if(emailPass && passPass) {
			loginObject = {
				username: username,
				email: username,
				password: password
			};
		}
		console.log(loginObject);
	};
});