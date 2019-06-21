const GIPHY_KEY = 'RFcpCIaXYmqxhXwPHl492f0heni8XoHk';
const keyword = 'cat';



const btn = document.getElementById('btn');

function createElem(){
  const value = Math.floor(Math.random() * 50);

fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}&limit=50`)
.then(res => res.json())
.then(json => {
  result = json;

const image = json.data[value].images.original.url;

let gifElem = document.getElementById('gif-element');
gifElem.innerHTML = '<img src="' + image + '"/>';

}); 

}
