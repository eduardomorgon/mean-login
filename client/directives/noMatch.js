(function() {
    'use strict';
    angular
        .module('App')
        .directive('ngMatch', ngMatch);
    //ngMatch.$inject = [''];
    /* @ngInject */
    function ngMatch() {
        // Usage: data-ng-match
        //
        // Creates:
        //
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A',
            scope: {
            	reference: '=ngMatch'
            }
        };
        return directive;
        function link(scope, element, attrs, ctrl) {
            // console.log('ctrl', ctrl);
        	ctrl.$parsers.unshift(function(viewValue, $scope) {
        		var noMatch = viewValue != scope.reference;
        		ctrl.$setValidity('noMatch', !noMatch);
        		return (noMatch)?noMatch:!noMatch;
        	});
        	scope.$watch("reference", function(value) {
        		ctrl.$setValidity('noMatch', value === ctrl.$viewValue);
        	});
        }
    }

})();
