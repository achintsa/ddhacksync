//const url="http://cuddly-treefrog.hackathon.venom360.com/api/logs/cratedb?min=2018-02-12T00:00:00.000Z&max=2018-02-12T00:00:09.999Z"

function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('logslist');
console.log(ul);
// const url="http://cuddly-treefrog.hackathon.venom360.com/api/logs/cratedb?min=2018-02-12T00:00:00.000Z&max=2018-02-12T00:00:09.999Z";
const url = window.location.toString();
// const url = 'https://randomuser.me/api/?results=10';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data;
	console.log("below data");
    return authors.map(function(author) {
      let li = createNode('li'),
          //img = createNode('img'),
          span = createNode('span');
      //img.src = author.picture.medium;
      span.innerHTML = `${  JSON.stringify(author, null,2)  }`;
      //append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });   



