angular.module('moviesApp').filter('titleFilter', function () {
  return function (items, str) {
      if(str) {
        return Array.from(items).filter(item => item.title.toLowerCase().includes(str.toLowerCase()));
      } else {
        return items;
      }
  };
});