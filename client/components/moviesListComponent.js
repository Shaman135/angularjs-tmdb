function MoviesListController($scope, $element, $route, $filter, MoviesApi) {
  var self = this;
  this.movies = [];
  this.selected = 'Brak filtra';
  this.reverse = true;
  this.propertyName = 'vote_average';

  this.ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Brak filtra'];
  this.$onChanges = function() {
    this.movies = MoviesApi.getPopular().then(res => self.movies = res.data.results);
  }

  this.sortBy = function (propertyName) {
    if (propertyName !== null && this.propertyName === propertyName) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }
    this.propertyName = propertyName;
    this.movies = $filter('orderBy')(this.movies, this.propertyName, this.reverse);
  }
} 


angular.module('moviesApp').component('moviesListComponent', {
  templateUrl: '../templates/movies-list.html',
  controller: MoviesListController,
  controllerAs: 'moviesList',
  bindings: {}
});