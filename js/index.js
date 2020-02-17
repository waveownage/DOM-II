//body

window.addEventListener('load', function () {
    console.log('Lets Go on an Adventure!');
});

window.addEventListener('scroll', function () {
    console.log('scrolling through the site!');
});

window.addEventListener('resize', function () {
    console.log('change the window size!');
});

//main-navigation

let home = document.querySelectorAll('a')[0];

home.addEventListener('mouseover', function () {
    home.style.color = 'blue'
});

let aboutus = document.querySelectorAll('a')[1];

aboutus.addEventListener('mouseover', function () {
    aboutus.style.color = 'yellow'
});

let blog = document.querySelectorAll('a')[2];

blog.addEventListener('mouseover', function () {
    blog.style.color = 'green'
});

let contact = document.querySelectorAll('a')[3];

contact.addEventListener('mouseover', function () {
    contact.style.color = 'red'
});



//Container Home

let homepar = document.querySelector('.intro p');

homepar.setAttribute("tabindex", 0);

homepar.addEventListener('keydown', function () {
    homepar.style.color = 'red'
});

let busimg = document.querySelector('img')

busimg.addEventListener('mouseenter', function () {
    busimg.style.transform = "rotate(360deg)";
    busimg.style.transitionDuration = "5s"
})

//content-section

let backColor = document.querySelector('.content-section')

backColor.addEventListener('mouseleave', function () {
    backColor.style.background = 'pink';
    backColor.style.transitionDuration = '5s'
})

let mapImg = document.querySelector('.img-content img');

mapImg.addEventListener('click', function () {
    mapImg.style.transform = 'scale(1.2)';
})

//content-destination

let inpar = document.querySelector('.content-destination');

inpar.addEventListener('copy', function () {
    inpar.style.background = 'purple';
    inpar.style.color = 'white';
});

let button = document.querySelectorAll(".btn")[0];

button.addEventListener('dblclick', function () {
    button.style.backgroundColor = 'orange';
});

let button2 = document.querySelectorAll(".btn")[1];

button2.addEventListener('dblclick', function () {
    button2.style.backgroundColor = 'pink';
});

let button3 = document.querySelectorAll(".btn")[2];

button3.addEventListener('dblclick', function () {
    button3.style.backgroundColor = 'purple';
});





