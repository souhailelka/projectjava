var content = document.querySelector('.content');

function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card col-3 me-2 mb-2'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    img.src = path;
    img.setAttribute('class', 'card-img');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title');
    span.appendChild(document.createTextNode(price));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    content.append(div);
}




var list = document.querySelector('#categories');

function creationCategory() {
    var tab = courses.map(function(v) { return v.category.toUpperCase() });
    var categories = ['all', ...new Set(tab)];

    categories.forEach((v) => {
        let li = document.createElement('li'); // <li></li>
        li.setAttribute('class','setcats')
        li.appendChild(document.createTextNode(v)); // <li>v</li>
        list.append(li);
    })
}
creationCategory()
//prix.setAttribute('max',m);
var t = courses.map(function(l){return l.price});
var allprices = [...new Set(t)];
var max = allprices[0];
for (var i = 1; i < allprices.length; i++) {
    if (allprices[i] > max) {
        max = allprices[i];
      }
}


var pricerange = document.getElementById("PriceInput");
var prix = document.getElementById("valPrice");
pricerange.setAttribute('max', max);



pricerange.addEventListener('change', function(){
    prix.innerHTML = pricerange.value;
    const filteredCourses = courses.filter(course => course.price < pricerange.value);
    console.log(filteredCourses);
    content.innerHTML = '';
    filteredCourses.forEach(course => creationCours(course.image, course.title, course.price));
})


var selectedcat = document.querySelectorAll('.setcats')

selectedcat.forEach(element => element.addEventListener('click', function() {
  
  if(element.innerHTML == 'all'){
    content.innerHTML = '';
    const fulltablecourses = courses.filter(course => course.price > 0);
    fulltablecourses.forEach( course =>  creationCours(course.image, course.title, course.price));
  }
  else{
  const filteredC = courses.filter(course => course.category == element.innerHTML);
  content.innerHTML = '';
  console.log(filteredC);
filteredC.forEach(course => creationCours(course.image, course.title, course.price));
}}
) );
var search = document.getElementById('search');

search.addEventListener('input',function searchbykeyword(){
  
  var keyword = search.value;
  const searchcourses = courses.filter(course => course.title.toLowerCase().includes(keyword));
      content.innerHTML = '';
      searchcourses.forEach(course => creationCours(course.image, course.title,course.price));
      


});



