function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// EasyHTTP.prototype.get = function(url) {
//   this.http.open('GET', url, true);

//   let self = this;
//   this.http.onload = function() {
//      if(self.http.status === 200) {
//        return self.http.responseText;
//      }
//   }


EasyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('error' + self.http.status)
    }
  }

  this.http.send();
}
