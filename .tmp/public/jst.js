this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/assignment.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="assignmentCtrl">\n\t<header>\n\t\t<h2> Assignment Creation </h2>\n\t</header>\n\t<form ng-submit="assignmentSubmit(assignment)">\n\t\t<div>\n\t\t\t<input ng-model="assignment.name" type="text" placeholder="Please enter the name of the assignment"> \n\t\t</div>\n\t\t<div>\n\t\t\t<input ng-model="assignment.dueAt" type="datetime-local" placeholder="Date Assignment is Due">\n\t\t</div>\n\t\t<div>\n\t\t\t<input ng-model="assignment.url" type="text" placeholder="URL of Assignment">\n\t\t</div>\n\t\t<div>\n\t\t\t<button> Sign Up </button>\n\t\t</div>\n\t</form>\n\t<span ng-show="emailErrorMsg"> That is not a valid email </span>\n\t<span ng-show="passwordErrorMsg"> That is not a valid password </span>\n\t<div>\n\t\t<a ui-sref="login"> Back to the Log In Page! </a>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/dashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="dashboardCtrl">\n\t<h1> Dashboard </h1>\n\t<h2> <a ui-sref="assignment"> Create New Assignment </a> </h2>\n</section>';

}
return __p
};

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
__p += '<section ng-controller="loginCtrl">\n\t<header>\n\t\t<h1> Login </h1>\n\t</header>\n\t<form ng-submit="loginSubmit(username, userpassword)">\n\t\t<input ng-model="username" type="text" placeholder="Please enter your username"> \n\t\t<input ng-model="userpassword" type="Password" placeholder="password">\n\t\t<button> Log In </button>\n\t</form>\n\t<span ng-show="emailErrorMsg"> That is not a valid email </span>\n\t<span ng-show="passwordErrorMsg"> That is not a valid password </span>\n\t<span ng-bind="loginErrorArray"></div>\n\t<div>\n\t\t<a ui-sref="register"> Sign Up for Iron Works </a>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="registerCtrl">\n\t<header>\n\t\t<h1> Registration </h1>\n\t</header>\n\t<form ng-submit="loginSubmit(username, userpassword)">\n\t\t<input ng-model="username" type="text" placeholder="Please enter your username"> \n\t\t<input ng-model="userpassword" type="Password" placeholder="Password">\n\t\t<button> Sign Up </button>\n\t</form>\n\t<span ng-show="emailErrorMsg"> That is not a valid email </span>\n\t<span ng-show="passwordErrorMsg"> That is not a valid password </span>\n\t<span ng-bind="loginErrorArray"> </span>\n\t<div>\n\t\t<a ui-sref="login"> Back to the Log In Page! </a>\n\t</div>\n</section>';

}
return __p
};