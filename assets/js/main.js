const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


// 
const title = document.querySelector('.header-box h1');
const description = document.querySelector('.header-box p');
const header = document.querySelector('.header');
const buttons = document.querySelectorAll('.btn');
const backgrounds = {
    '01': './assets/images/home/desktop/image-hero-paramour.jpg',
    '02': './assets/images/home/desktop/image-hero-seraph.jpg',
    '03': './assets/images/home/desktop/image-hero-federal.jpg', 
    '04': './assets/images/home/desktop/image-hero-trinity.jpg'  
};

const texts = {
    '01': {
        title: 'Project Paramour',
        description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'
    },
    '02': {
        title: 'Seraph Station',
        description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model.'
    },
    '03': {
        title: 'Federal\u00A0II Tower',
        description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'
    },
    '04': {
        title: 'Trinity\u00A0Bank Tower',
        description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves.'
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonNumber = button.textContent;
        if (backgrounds[buttonNumber]) {
            header.style.backgroundImage = `url(${backgrounds[buttonNumber]})`;
        }

        if (texts[buttonNumber]) {
            title.textContent = texts[buttonNumber].title;
            description.textContent = texts[buttonNumber].description;
        }

        buttons.forEach(btn => btn.classList.remove('active-b'));
        button.classList.add('active-b');
    });
});
