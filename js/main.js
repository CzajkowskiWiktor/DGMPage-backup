const navMobile = document.querySelector('.nav-mobile');
const allNavMobile = document.querySelectorAll('.nav__link-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

    if (navBtn.classList.contains('is-active')) {
        navBtn.style.position = 'fixed';
    } else {
        navBtn.style.position = 'absolute';
    }

    allNavMobile.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active');
            navBtn.classList.remove('is-active');
            navBtn.style.position = 'absolute';
        });
    });

}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', handleNav);