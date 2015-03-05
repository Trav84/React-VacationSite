angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	})
	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerCtrl'
	})
	.state('dashboard', {
		url: '/dashboard', 
		templateUrl: 'templates/dashboard.html',
		controller: 'dashboardCtrl'
	})
	.state('assignment', {
		url: '/assignment',
		templateUrl: 'templates/assignment.html',
		controller: 'assignmentCtrl'
	})
	.state('viewAssignments', {
		url: '/viewAssignments',
		templateUrl: 'templates/viewAssignments.html',
		controller: 'viewAssignmentsCtrl'
	})
	.state('submitAssignment', {
		url: '/submitAssignment',
		templateUrl: 'templates/submitAssignment.html',
		controller: 'submitAssignmentCtrl'
	});
	$urlRouterProvider.otherwise('/login');
});