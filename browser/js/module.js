'use strict';

var juke = angular.module('juke', ['ui.router'])

juke.config(function ($stateProvider) {
  $stateProvider
  .state('albumList', {
    url: '/albums',
    templateUrl: '/templates/albums.html',
    controller: 'AlbumsCtrl'
  })
  .state('album', {
    url: '/albums/:id',
    templateUrl: '/templates/album.html',
    controller: 'AlbumCtrl'
  })
  .state('artistList', {
    url: '/artists',
    templateUrl: '/templates/artists.html',
    controller: 'ArtistsCtrl'
  })
  .state('artist', {
    url: '/artists/:id',
    templateUrl: '/templates/artist.html',
    controller: 'ArtistCtrl'
  });
});
