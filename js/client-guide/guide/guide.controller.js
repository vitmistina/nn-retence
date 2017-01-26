(function () {
'use strict';

angular.module('clientGuide')
.controller('GuideController',GuideController);

GuideController.$inject = ['$state'];

function GuideController($state) {
  var ctrl = this;
  if (document.referrer.search("//www.nnporadce.cz") == -1)
  {
    $state.go("restricted-access");
  }
}

})();
