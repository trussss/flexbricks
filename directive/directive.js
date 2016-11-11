myapp.directive("userLists", function($http, myService, $filter) {
  return {
	templateUrl: "directive/directiveview.html",
	scope: {},
	link: function($scope, element) {
		myService.getData().then(function(response){
			// alert(response);
			$scope.responseData = response.data;
			$scope.allData = $scope.responseData.data;
			$scope.titles = $scope.responseData.schema;
		});
		$scope.currentType =  "";
		var count = 0;
		$scope.sortOrder = function(type){
			var prevType = $scope.currentType;
			$scope.currentType = type;
				if($scope.order == "-"+ $scope.currentType || prevType!=type){
					$scope.order = $scope.currentType;
					
				}else{
					$scope.order = "-"+ $scope.currentType;	
			}
			if(prevType!=type){
				count = 0;
			}
			count++;			
			if(count == 3){
				count = 0;
				$scope.order = ""; 
				$scope.currentType = ""; 
			}
		}
	}
  };
});