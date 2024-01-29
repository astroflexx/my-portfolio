/* Change name when width below 900 */

const myName = document.querySelector('#my-name');

function updateName() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 900) {
        myName.textContent = 'adithya.v';
    }

    else {
        myName.textContent = 'a.v';
    }
}

updateName();

window.addEventListener('resize', updateName);

/* Toggle navbar on mobile */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const headingElement = document.querySelector('.heading');
const myTools = document.querySelector('#my-tools');
const myProjects = document.querySelector('#my-projects');
const aboutMe = document.querySelector('#about-me');
const contactMe = document.querySelector('#contact-me');
const footerElement = document.querySelector('#footer');

const elements = [headingElement, myTools, myProjects, aboutMe, contactMe, footerElement];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

for (let element of elements) {
    element.addEventListener('click', () => {
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.classList.toggle('active');
        }
    })
}

/* Typewriter effect */

const typewriterContent = document.getElementById("typewriter");
const phrases = ["Student", "Programmer", "Gamer"];

let phraseIndex = 0;
let letterIndex = 0;
const typingTime = 200;
const erasingTime = 200;

function printLetters(phrase) {

    // clear letters that have been typed

    if (letterIndex == phrase.length) {
        clearLetters();
    }

    // type letters

    else if (letterIndex < phrase.length) {
        typewriterContent.textContent += phrase.charAt(letterIndex);
        letterIndex++;

        // wait for typingTime milliseconds before typing the next letter

        // setTimeout(printLetters(phrase), typingTime) doesn't work for some reason
        // but setTimeout(eraseLetters(phrase), erasingTime) does

        setTimeout(function () {
            printLetters(phrase)
        }, typingTime);
    }
}

function clearLetters() {

    // new word

    if (letterIndex == -1) {
        phraseIndex++;
        phraseIndex %= phrases.length;
        letterIndex = 0;

        // start printing this new word

        printLetters(phrases[phraseIndex])
    }

    // clear letters one by one

    else if (letterIndex > -1) {
        let currentPhrase = typewriterContent.textContent;
        let updatedPhrase = currentPhrase.substring(0, currentPhrase.length - 1);
        typewriterContent.textContent = updatedPhrase;
        letterIndex--;

        // wait for erasingTime milliseconds before erasing the next letter

        setTimeout(clearLetters, erasingTime);
    }
}

// call the function

printLetters(phrases[phraseIndex]);

// Light-Dark Toggle

const lightDarkButton = document.querySelector('.light-dark-toggle');
const bodyElement = document.querySelector('body');

lightDarkButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark')) {
        lightDarkButton.textContent = 'Dark Theme';
    } else {
        lightDarkButton.textContent = 'Light Theme';
    }

    bodyElement.classList.toggle('dark');
});