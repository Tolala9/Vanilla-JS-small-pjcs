document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('text.txt')
  .then(res => res.text())

  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(error => console.log(error))
}

function getJson() {
  fetch('post.json')
  .then(res => res.json())
  .then(data => {
    let result = '';

    data.forEach(e => {
      result +=  `${e.title} <br>`;
    });
    document.getElementById('output').innerHTML = result;
  })
  .catch(error => console.log(error))
}

function getExternal() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    let result = '';

    data.forEach(e => {
      result +=  `${e.login} <br>`;
    });
    document.getElementById('output').innerHTML = result;
  })
  .catch(error => console.log(error))
}
