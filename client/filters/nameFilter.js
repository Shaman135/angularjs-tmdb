angular.module('moviesApp').filter('nameFilter', function () {
  return function (items, str) {
      if(str) {
        return Array.from(items).filter(item => item.name.toLowerCase().includes(str.toLowerCase()));
      } else {
        return items;
      }
  };
});