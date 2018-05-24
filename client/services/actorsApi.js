angular.module('moviesApp').service('ActorsApi', function($http) {
  API_KEY = '';
  this.getActorById = id => {
    return $http.get('https://api.themoviedb.org/3/person/' + id + '?api_key=' + API_KEY + '&language=pl');
  }

  this.getMovieCredits = id => {
    return $http.get('https://api.themoviedb.org/3/person/' + id + '/movie_credits' + '?api_key=' + API_KEY + '&language=pl');
  }

  this.getPopular = (page) => {
    return $http.get('https://api.themoviedb.org/3/person/popular' + '?api_key=' + API_KEY + '&language=pl&page=' + page);
  }
});