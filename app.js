var app = angular.module("productApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/products", {
      templateUrl: "./views/products.html",
      controller: "productsController",
    })
    .when("/about", {
      templateUrl: "./views/about.html",
      controller: "aboutController",
    })
    .when("/contact", {
      templateUrl: "./views/contact.html",
      controller: "contactController",
    })
    .when("/userDetails/:id", {
      templateUrl: "./views/userDetails.html",
      controller: "userDetailsController",
    })
    .otherwise({
      redirectTo: "/products",
    });
});
