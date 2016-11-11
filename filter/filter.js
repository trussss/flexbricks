myapp.filter('reverse', function() {
  return function(items) {
  	//alert(JSON.stringify(items));
	 if(items == undefined)
		 return;
    return items.slice().reverse();
  };
});