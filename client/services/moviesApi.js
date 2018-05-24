angular.module('moviesApp').service('MoviesApi', function($http) {
  API_KEY = '';
  this.getPopular = page => {
    return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&language=pl&page=' + page);
  }

  this.getPremieres = () => {
    return $http.get('https://api.themoviedb.org/3/discover/movie?api_key='  + API_KEY + '&primary_release_date.gte=2018-05-01&primary_release_date.lte=2018-05-31&language=pl');
  }

  this.getMovieById = id => {
    return $http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY + '&language=pl&append_to_response=credits');
  }
});