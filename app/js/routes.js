
//
// Main entry of Shanghai Explorer
//

//
// Routes declaration
//
BeatsExplorer = angular.module('BeatsExplorer', [], function($routeProvider, $locationProvider) {
    $routeProvider
    	.when('/', {
	    controller : HomeController,
	    reloadOnSearch : false,
	    templateUrl : '/views/home.html'
	})
	.otherwise({
	    redirectTo : '/'
	});
});
