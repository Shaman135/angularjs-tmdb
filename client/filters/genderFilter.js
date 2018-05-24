angular.module('moviesApp').filter('gender', function () {
  return function (item) {
      if(item == 1) {
        return 'Kobieta'; 
      } else if(item == 2) {
        return 'Mężczyzna';
      } else {
        return 'Inne';
      }
  };
});