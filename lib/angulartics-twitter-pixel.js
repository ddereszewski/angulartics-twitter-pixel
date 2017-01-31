(function(window, angular, undefined) {
    'use strict';

    /**
     * @ngdoc overview
     * @name angulartics.twitter.pixel
     * Enables analytics support for Twitter Pixel
     */
    angular.module('angulartics.twitter.pixel', ['angulartics'])
        .config(['$analyticsProvider', function ($analyticsProvider) {

            $analyticsProvider.registerPageTrack(function (path) {
                if (window.fbq) {
                    twq('track','PageView');
                }
            });
        }]);
})(window, window.angular);