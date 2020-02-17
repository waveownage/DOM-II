//main-navigation

let home = document.querySelectorAll('a')[0];

home.addEventListener('mouseover', function(){
    home.style.color = 'blue'});

let aboutus = document.querySelectorAll('a')[1];

aboutus.addEventListener('mouseover', function(){
    aboutus.style.color = 'blue'});

let blog = document.querySelectorAll('a')[2];

blog.addEventListener('mouseover', function(){
    blog.style.color = 'blue'});

let contact = document.querySelectorAll('a')[3];

contact.addEventListener('mouseover', function(){
    contact.style.color = 'blue'});

//Container Home

let homepar = document.querySelector('.intro p');

homepar.setAttribute("tabindex", 0);

homepar.addEventListener('keydown', function(){
    homepar.style.color = 'red'});

let busimg = document.querySelector('img')

busimg.addEventListener('mouseenter', function(){
    busimg.style.transform = "rotate(360deg)";
    busimg.style.transitionDuration="5s"
})







