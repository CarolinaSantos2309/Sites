const navbar = document.querySelector('.navbar_links');

button.addEvenListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener("scroll", function(){
    if (this.window.pageYOffset > 0) return navbar.classList.add('action')
    return navbar.classList.remove('active');
});