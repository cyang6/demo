(function () {
  'use strict';

  /* @ngdoc object
   * @name demo
   * @description
   *
   */
  angular
    .module('demo', [
      'ui.router',
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMaterial',
      'ngMessages',
      'ngSanitize',
      'home',
      'oc.lazyLoad'
    ]);
}());
