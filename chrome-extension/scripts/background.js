﻿function shortenUrl(longUrl, incognito, callback) {
  var http = new XMLHttpRequest();
  var url = "http://shoutkey.com/new?url=" + longUrl + "&ttl=3600";
  http.open("GET", url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function () {//Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      var shoutkey = $(http.responseText).find(".hero-unit h1 a").text()
      callback({status: 'success', message: shoutkey, added_to_history: {}});
    }
  };

  http.send();
}
