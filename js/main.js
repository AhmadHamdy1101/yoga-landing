var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
var closeMenu = document.querySelector('.close-menu');

toggle.addEventListener('click',function(){
    menu.style.top = '15vh';
    toggle.style.display = 'none';
    closeMenu.style.display = 'flex'
});
closeMenu.addEventListener('click',function(){
    menu.style.top = '-100vh';
    toggle.style.display = 'block';
    closeMenu.style.display = 'none'
})