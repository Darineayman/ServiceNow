app.service("detailService", function ($http) {

  var apiKey = "sb_publishable_NE7gABdzJPAkrW00Aa7cJw_q4TI69h2";
  var apiLink = "https://xrslatldfiyfpszgmptb.supabase.co/rest/v1/users";

  var headers = {
    apikey: apiKey,
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  };

  this.getUser = function (id) {
    return $http.get(apiLink + "?id=eq." + id, {
      headers: headers
    });
  };

});