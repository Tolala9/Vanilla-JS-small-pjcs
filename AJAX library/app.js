const http = new EasyHTTP;

// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

const data = {
  "userId": 33333,
  "id": 2323,
  "title": "Custom post",
  "body": "Hello"
}
//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//     if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })


// update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
//     if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })

// delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });
