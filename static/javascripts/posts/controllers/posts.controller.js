(function () {
  'use strict';

  angular
    .module('thinkster.posts.controllers')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$scope'];

  function PostsController($scope) {
    var vm = this;

    vm.columns = [];

    activate();

    function activate() {

    }
  }
})();