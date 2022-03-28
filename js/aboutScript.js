const body = document.querySelector('html');

const welcomePhaseIn = () => {
    setTimeout(() => {
        setTimeout(() =>(body.style.opacity = 1), 10);
    }, 300)
}

welcomePhaseIn();