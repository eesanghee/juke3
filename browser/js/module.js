'use strict';

var juke = angular.module('juke', ['ui.router'])

juke.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.when('', '/albums');
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('albumList', {
    url: '/albums',
    templateUrl: '/templates/albums.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  })
  .state('album', {
    url: '/albums/:id',
    templateUrl: '/templates/album.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id)
      }
    },
    controller: 'AlbumCtrl'
  })
  .state('artistList', {
    url: '/artists',
    templateUrl: '/templates/artists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll()
      }
    },
    controller: 'ArtistsCtrl'
  })
  .state('artist', {
    url: '/artists/:id',
    templateUrl: '/templates/artist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id)
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('artist.albums', {
    url: '/albums',
    templateUrl: '/templates/artist_albums.html',
  })
  .state('artist.songs', {
    url: '/songs',
    templateUrl: '/templates/artist_songs.html'
  });
});


