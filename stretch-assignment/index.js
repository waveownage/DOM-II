
let redBlock = document.querySelector('.block--red');

redBlock.addEventListener('mousedown', function(){
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        pos++;  
        redBlock.style.left = pos + "px"; 
}});
redBlock.addEventListener('mouseup', function(){
    redBlock.style.zIndex = 1;
});

let blueBlock = document.querySelector('.block--blue');

blueBlock.addEventListener('mousedown', function(){
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        pos++;  
        blueBlock.style.left = pos + "px"; 
}});
blueBlock.addEventListener('mouseup', function(){
    blueBlock.style.zIndex = 1;
});