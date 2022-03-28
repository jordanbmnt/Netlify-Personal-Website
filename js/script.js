const welcome = document.querySelector('#welcome');
const main = document.querySelector('#main');
const body = document.querySelector('body');

const welcomePhaseIn = () => {
    setTimeout(() => {
        welcome.style.opacity = 0;
        welcome.style.display = 'none';
        body.style.overflowY = 'scroll';
        main.style.display = 'grid';
        setTimeout(() =>(main.style.opacity = 1), 60);
    }, 1700)
}

welcomePhaseIn();