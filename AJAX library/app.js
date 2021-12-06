const http = new EasyHTTP;

// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
  if (error) {
    console.log(error);
  } else {
    console.log(posts);
  }
});
