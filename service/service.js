myapp.service('myService', function($http) {
	this.getData = function() {
		return $http.get('./json/data.json');
	}
});

myapp.factory('myappApi', function myappApi($http){
  return {
    getItems: function(callback){
      $http.get('./json/data.json').then(callback).catch(callback);
    }  
  };
});