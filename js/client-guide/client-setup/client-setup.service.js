(function () {
'use strict';

angular.module('clientGuide')
.service('ClientSetupService',ClientSetupService);

ClientSetupService.$inject = ['localStorageService'];

function ClientSetupService(localStorageService) {
  var service = this;

  service.client = {
    name:null,
    savedAmount:null
  };

  service.setClientData = function (clientData) {
    localStorageService.set('name', clientData.name);
    localStorageService.set('savedAmount', clientData.savedAmount);
  };

  service.getClientData = function () {
    service.client.name = localStorageService.get('name');
    service.client.savedAmount = localStorageService.get('savedAmount');
    return service.client;
  };

}

})();
