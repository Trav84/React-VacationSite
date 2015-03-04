angular.module('app.services', [])
.factory('validateService', function() {
	return function(username, password) {
		var emailPass = false;
		var passPass = true;
		var loginObject = {
				loginTracker: {
					identifier: '',
					password: ''
				},
				errorObject: {
					email: '',
					password: ''
				}
		};

		if(validator.isEmail(username)) {
			emailPass = true;
		} else {
			emailPass = false;
			loginObject.errorObject.email = 'Please enter a valid email.'
		}
		if(validator.isNull(password)) {
			passPass = false;
			loginObject.errorObject.password = 'Please enter a valid password.'
		} 
		else {
			passPass = true;
		}
		if(emailPass && passPass) {
			loginObject.loginTracker.identifier = username;
			loginObject.loginTracker.password = password;
		}

		return loginObject;
	};
})
.factory('objectLog', function() {
	return function(validated) {
		var noEmailError = false;
		var noPassError = false;

		if(validated.errorObject.email.length === 0) {
			noEmailError = true;
		}
		if(validated.errorObject.password.length === 0) {
			noPassError = true;
		}
		if(noEmailError && noPassError) {
			console.log(validated.loginTracker);
		}
	}
});