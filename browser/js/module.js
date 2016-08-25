'use strict';

var juke = angular.module('juke', ['ui.router'])

juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/templates/albums.html',
    controller: 'AlbumsCtrl'
  });
});
