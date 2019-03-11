//Thanks to BasvanH (https://github.com/BasvanH) for this code

(function () {
    'use strict';
    angular
      .module('app.widgets.oscwidget', [])
      .controller('ngMaximizeWidgetContent', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
  
          function maximize() {
            //console.debug("Maximizing ");
            let parent = document.querySelector(".osc-widget");
            if (parent != null) {
                parent = parent.parentElement;
                parent.classList.add("osc-maximize");
            }
          }
  
          // Run function when items update
          $rootScope.$on('openhab-update', function (event, item) {
            maximize();
          });
  
          maximize();
        }
      ]);
  })();
