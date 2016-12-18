(function () {
'use strict';

angular.module('clientGuide')
.controller('timeToPensionController',timeToPensionController);

timeToPensionController.$inject = ['pensionCalculatorService'];
function timeToPensionController(pensionCalculatorService) {
  var $ctrl = this;

  $ctrl.estimatedYearOfRetirement = null;
  $ctrl.yearOfBirth = 1950;
  $ctrl.gender = "male";

  $ctrl.slider = {
    options: {
      floor: 1950,
      ceil: 2000,
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
    $ctrl.estimatedYearOfRetirement = pensionCalculatorService.getEstimatedYearOfRetirement($ctrl.yearOfBirth,$ctrl.gender);
    $ctrl.currentAge = pensionCalculatorService.getCurrentAge($ctrl.yearOfBirth);
    $ctrl.timeUntilRetirement = pensionCalculatorService.getTimeUntilRetirementInYears($ctrl.yearOfBirth,$ctrl.gender);
  };




}

})();
