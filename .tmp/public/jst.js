this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1> Home Page </h1>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="loginCtrl">\n\t<header>\n\t\t<h1> Login </h1>\n\t</header>\n\t<form ng-submit="loginSubmit(username, userpassword)">\n\t\t<input ng-model="username" type="text" placeholder="Please enter your username"> \n\t\t<input ng-model="userpassword" type="Password" placeholder="password">\n\t\t<button> Log In </button>\n\t</form>\n\t<span ng-show="emailErrorMsg"> That is not a valid email </span>\n\t<span ng-show="passwordErrorMsg"> That is not a valid password </span>\n\t<div>\n\t\t<a ui-sref="register"> Sign Up for Iron Works </a>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="registerCtrl">\n\t<header>\n\t\t<h1> Registration </h1>\n\t</header>\n\t<form ng-submit="loginSubmit(username, userpassword)">\n\t\t<input ng-model="username" type="text" placeholder="Please enter your username"> \n\t\t<input ng-model="userpassword" type="Password" placeholder="password">\n\t\t<button> Sign Up </button>\n\t</form>\n\t<span ng-show="emailErrorMsg"> That is not a valid email </span>\n\t<span ng-show="passwordErrorMsg"> That is not a valid password </span>\n\t<div>\n\t\t<a ui-sref="login"> Back to the Log In Page! </a>\n\t</div>\n</section>';

}
return __p
};