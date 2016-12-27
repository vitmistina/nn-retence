(function () {
'use strict';

angular.module('clientGuide')
.controller('ExpectedPensionController',ExpectedPensionController);

ExpectedPensionController.$inject = ['pensionCalculatorService'];
function ExpectedPensionController(pensionCalculatorService) {
  var $ctrl = this;
  $ctrl.averageMonthlyIncome = 15000;
  $ctrl.estimatedPension = null;
  $ctrl.incomeLoweredBy = 1000;
  $ctrl.slider = {
    options: {
      floor: 10000,
      ceil: 45000,
      step: 5000,
      hideLimitLabels: true,
      hidePointerLabels: true,
      enforceRange: false,
      enforceStep: false,
      onChange: function () {
        $ctrl.update();
      },
    }
  };

  $ctrl.update = function () {
    $ctrl.estimatedPension = 5000 + $ctrl.averageMonthlyIncome/3;
    $ctrl.incomeLoweredBy = 100 - 100 * $ctrl.estimatedPension / ($ctrl.averageMonthlyIncome*0.9);
  };
}

})();
