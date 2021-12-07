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


EasyHTTP.prototype.get = function(url, callback) {
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

EasyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

EasyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


EasyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('error' + self.http.status)
    }
  }

  this.http.send();
}
