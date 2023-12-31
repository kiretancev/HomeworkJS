let menuButton = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.menuWrapper')
let navbar__links = document.querySelectorAll('.navbar__links')


menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
    menuLinks.classList.toggle('active');
})

navbar__links.forEach(link => {

    link.addEventListener('click', function handleClick(event) {

        let activeLink = document.getElementsByClassName('navbar__links active')

        if(activeLink) activeLink[0].classList.remove("active");
        
        link.classList.toggle('active');
    });
});