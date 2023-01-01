
var content = document.querySelector('.rndmcards');
function addcards(path,title,price){
    let div = document.createElement('div');
    div.setAttribute('class','card col-3 mx-3');
    div.setAttribute('style','width: 26rem;');
     
    let img =document.createElement('img'),
        h1 = document.createElement('h1'),
        p = document.createElement('p');
        img.setAttribute('class','card-image-top');
        img.src= path;
        h1.setAttribute('class','card-title');
        h1.appendChild(document.createTextNode(title));
        
        p.setAttribute('class','card-text');
        p.appendChild(document.createTextNode(price));
        p.appendChild(document.createTextNode('$'));

        let bdiv=document.createElement('div');
        bdiv.setAttribute('class','card-body');
        bdiv.appendChild(h1);
        bdiv.appendChild(p);
        div.appendChild(img);

        div.appendChild(bdiv);

        content.appendChild(div);
}

const index1 = Math.floor(Math.random() * courses.length);
const index2 = Math.floor(Math.random() * courses.length);
const index3 = Math.floor(Math.random() * courses.length);


const randomCourse1 = courses[index1];
const randomCourse2 = courses[index2];
const randomCourse3 = courses[index3];


addcards(randomCourse1.image,randomCourse1.title,randomCourse1.price);
addcards(randomCourse2.image,randomCourse2.title,randomCourse2.price);
addcards(randomCourse3.image,randomCourse3.title,randomCourse3.price);

var btn= document.querySelectorAll('.btn');
btn.forEach(function(btn) { // iterate over the elements
    btn.addEventListener('click', function() { // add an event listener to each element
      window.location.href='index.html'; // redirect to the index.html page when the element is clicked
    });
  });