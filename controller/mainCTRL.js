myapp.controller("mainCTRL", function($scope, $http, myService, $route){
 $scope.currentPage = 1;
  $scope.pageSize = 10;
	myService.getData().then(function(response){
		// alert(response);
		$scope.responseData = response.data;
		$scope.allData = $scope.responseData.data;
		$scope.titles = $scope.responseData.schema;
	});
});