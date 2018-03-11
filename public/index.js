//const url="http://cuddly-treefrog.hackathon.venom360.com/api/logs/cratedb?min=2018-02-12T00:00:00.000Z&max=2018-02-12T00:00:09.999Z"

function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  function searchlogs(){
  let ul = document.getElementById('logslist');
  let x = document.getElementById('x').value;
  let timedelta  = document.getElementById('timedelta').value;
// let timedelta = tdv.options[tdv.selectedIndex].value;
 console.log('timedelta- ' + timedelta);
// console.log(ul);
// const url="http://cuddly-treefrog.hackathon.venom360.com/api/logs/cratedb?min=2018-02-12T00:00:00.000Z&max=2018-02-12T00:00:09.999Z";
var url = window.location.toString();
url = url+"/api/logs/";
var param1;
//seconds
if(timedelta == "0"){
  param1 = "rethinkdblastxseconds" + "?x=" + x ;
}
//minutes
if(timedelta == "1"){
  param1 = "rethinkdblastxminutes" + "?x=" + x ;

}
//hour
if(timedelta == "2"){
  param1 = "rethinkdblastxminutes" + "?x=" + x ;
}
url = url+param1;
fetchDateUrl(url);

  }

//   let ul = document.getElementById('logslist');
//   let x = document.getElementById('x');
//   let timedelta  = document.getElementById('timedelta');

// console.log(ul);
// // const url="http://cuddly-treefrog.hackathon.venom360.com/api/logs/cratedb?min=2018-02-12T00:00:00.000Z&max=2018-02-12T00:00:09.999Z";
// var url = window.location.toString();
// url = url+"/api/logs/";
// var param1;
// //seconds
// if(timedelta == "0"){
//   param1 = "rethinkdblastxseconds" + "?x=" + x ;
// }
// //minutes
// if(timedelta == "1"){
//   param1 = "rethinkdblastxminutes" + "?x=" + x ;

// }
// //hour
// if(timedelta == "2"){
//   param1 = "rethinkdblastxminutes" + "?x=" + x ;
// }
// url = url+param1;
// fetchDateUrl(url);
// const url = 'https://randomuser.me/api/?results=10';

function fetchDateUrl(url){

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let logsList = data;
  
    return logsList.map(function(logi) {
      let li = createNode('li'),
          //img = createNode('img'),
          span = createNode('span');
      //img.src = author.picture.medium;
      span.innerHTML = `${  JSON.stringify(logi, null,2)  }`;
      //append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });  


}
 



