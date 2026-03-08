app.service("myService", function ($http) {
  this.apiKey = "sb_publishable_NE7gABdzJPAkrW00Aa7cJw_q4TI69h2";
  this.apiLink = "https://xrslatldfiyfpszgmptb.supabase.co/rest/v1/users";

  this.headers = {
    apikey: this.apiKey,
    Authorization: "Bearer " + this.apiKey,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  this.getUsers = function () {
    return $http.get(this.apiLink, { headers: this.headers });
  };

  this.addUser = function (user) {
    return $http.post(this.apiLink, user, {
      headers: this.headers,
    });
  };

  this.deleteUser = function (id) {
    return $http.delete(this.apiLink + "?id=eq." + id, {
      headers: this.headers,
    });
  };

  this.updateUser = function (id, user) {
    return $http.patch(this.apiLink + "?id=eq." + id, user, {
      headers: this.headers,
    });
  };
});
