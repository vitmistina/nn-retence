(function () {
'use strict';

angular.module('clientGuide')
.controller('ExampleOfPensionSavingsController',ExampleOfPensionSavingsController);

ExampleOfPensionSavingsController.$inject = [];

function ExampleOfPensionSavingsController() {
  var ctrl = this;



  ctrl.bar = {
    labels: ['Čistá mzda před důchodem','Starobní důchod','S čerpáním investice'],
    series: ['Čistá mzda před důchodem','Starobní důchod','Výplata naspořených prostředků'],
    data: [
            [0,12385,12385],
            [0,0,5219],
            [19295,0,0]
          ],
    colors: [
      {
        backgroundColor: "#ea650d",
        pointBackgroundColor: "#ea650d",
        pointHoverBackgroundColor: "#ea650d",
        borderColor: "#ea650d",
        pointBorderColor: '#fff',
        pointHoverBorderColor: "#ea650d"
      },
      {
        backgroundColor: "#c8cd2e",
        pointBackgroundColor: "#c8cd2e",
        pointHoverBackgroundColor: "#c8cd2e",
        borderColor: "#c8cd2e",
        pointBorderColor: '#fff',
        pointHoverBorderColor: "#c8cd2e"
      },

      {
        backgroundColor: "#ee7f00",
        pointBackgroundColor: "#ee7f00",
        pointHoverBackgroundColor: "#ee7f00",
        borderColor: "#ee7f00",
        pointBorderColor: '#fff',
        pointHoverBorderColor: "#ee7f00"
      }

    ],
    options: {
                scales: {
                  yAxes: [{
                    stacked: true
                  }],
                  xAxes: [{
                    stacked: true,
                    display:false
                  }]
                }
              }
  };

}

})();
