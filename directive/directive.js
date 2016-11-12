myapp.directive("userLists", function($http, myService, $filter) {
  return {
	templateUrl: "directive/directiveview.html",
	scope: {allData: "=", titles: "="},
	link: function($scope, element) {
		$scope.clearSearch = function() {
			$scope.searchText = "";
		}
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