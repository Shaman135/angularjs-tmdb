function UpcomingController($scope, $element, $route, MoviesApi) {
  var self = this;
  this.movies = [];
  this.$onChanges = function() {
    this.movies = MoviesApi.getPremieres().then(res => self.movies = res.data.results);
  }
} 

angular.module('moviesApp').component('upcomingComponent', {
  templateUrl: '../templates/upcoming.html',
  controller: UpcomingController,
  controllerAs: 'upcomingController',
});