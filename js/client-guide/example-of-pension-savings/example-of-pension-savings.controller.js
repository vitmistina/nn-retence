(function () {
'use strict';

angular.module('clientGuide')
.controller('ExampleOfPensionSavingsController',ExampleOfPensionSavingsController);

ExampleOfPensionSavingsController.$inject = [];

function ExampleOfPensionSavingsController() {
  var ctrl = this;



  ctrl.bar = {
    labels: ['Před důchodem','Prvních 5 let důchodu'],
    series: ['Starobní důchod','Výplata naspořených prostředků'],
    data: [
            [12385,12385],
            [0,5219]
          ],
    options: {
                scales: {
                  yAxes: [{
                    stacked: true
                  }],
                  xAxes: [{
                    stacked: true
                  }]
                }
              }
  };

}

})();
