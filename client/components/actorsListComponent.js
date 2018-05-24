function ActorsListController($scope, $element, $route, $filter, ActorsApi) {
  var self = this;
  this.actors = [];
  this.page = 1;
  this.$onChanges = function() {
    this.movies = ActorsApi.getPopular(this.page).then(res => self.actors = res.data.results);
  }

  this.reverse = true;
  this.propertyName = 'name';
  this.sortBy = function (propertyName) {
    if (propertyName !== null && this.propertyName === propertyName) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }
    this.propertyName = propertyName;
    this.actors = $filter('orderBy')(this.actors, this.propertyName, this.reverse);
  }
}

angular.module('moviesApp').component('actorsListComponent', {
  templateUrl: '../templates/actors-list.html',
  controller: ActorsListController,
  controllerAs: 'actorsList',
});