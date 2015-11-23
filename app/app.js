var app = angular.module('chatApp', ["ngRoute", "ui.bootstrap"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Views/chat.html",
            controller: "ChatController"
        })
            .otherwise({
                redirectTo: "/home"
            });
}]);