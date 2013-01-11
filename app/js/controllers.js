
function HeadController($scope, $location) {
    $scope.title = 'AMNBS';

    $scope.menus = [
	{title : 'Home', selected : false, url : '/'},
	{title : 'Bra', selected : false, url : '/Bra'}
    ];
            
}

function HomeController($scope) {
    
}
