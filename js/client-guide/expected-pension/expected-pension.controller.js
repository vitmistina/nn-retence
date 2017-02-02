(function () {
'use strict';

angular.module('clientGuide')
.controller('ExpectedPensionController',ExpectedPensionController);

ExpectedPensionController.$inject = ['pensionCalculatorService'];
function ExpectedPensionController(pensionCalculatorService) {
  var $ctrl = this;
  $ctrl.averageMonthlyIncome = 25000;
  $ctrl.yearsOfInsurance = 40;
  $ctrl.output = {
    estimatedPension: null,
    incomeLoweredBy: null
  };

  $ctrl.incomeSlider = {
    options: {
      floor: 10000,
      ceil: 60000,
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
  $ctrl.yearsOfInsuranceSlider = {
    options: {
      floor: 20,
      ceil: 50,
      step: 1,
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
    $ctrl.output = pensionCalculatorService.calculateExpectedPension($ctrl.averageMonthlyIncome,$ctrl.yearsOfInsurance);
  };
  $ctrl.update();
}

})();
