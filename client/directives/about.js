angular.module('moviesApp').directive('aboutDirective', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/about-text.html'
  };
});