document.querySelector('#site-nav-btn')
.addEventListener('click', () => {
    let navbar = document.querySelector('#nav-bar');

    if (getComputedStyle(navbar).display == 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
})