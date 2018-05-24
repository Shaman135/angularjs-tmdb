angular.module('moviesApp').filter('rating', function () {
  return function (item) {
      if(item <= 0) {
        return 'Brak'; 
      } else {
        return item;
      }
  };
});