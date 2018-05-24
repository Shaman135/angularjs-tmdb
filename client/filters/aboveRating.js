angular.module('moviesApp').filter('aboveRating', function () {
  return function (items, rating) {
      if(rating != 'Brak filtra') {
        return Array.from(items).filter(item => {
          return item.vote_average >= rating} );
      } else {
        return items;
      }
  };
});