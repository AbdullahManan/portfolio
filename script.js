document.addEventListener("DOMContentLoaded", () => {

    const text = document.querySelector(".hero-content h1");

    // Safety check (prevents errors)
    if (!text) return;

    // Split text into spans
    text.innerHTML = text.textContent
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join("");

    // Animate letters
    gsap.from(".hero-content h1 span", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.04
    });

});

// Subtle container animation
gsap.from(".hero-content", {
    scale: 0.95,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
});


gsap.from(".logo", {
    x: -50,
    opacity: 0,
    duration: 1
});
gsap.from(".nav-links", {
    x: 50,
    opacity: 0,
    duration: 1
});

if (document.querySelector(".about-text")) {
    gsap.from(".about-text h1", {
        x: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from(".about-text p", {
        x: -50,
        opacity: 0,
        duration: 1.0,
        delay: 0.3,
        stagger: 0.2
    });
}


if (document.querySelector(".contact-container")) {
    gsap.from(".contact-container h1", {
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".contact-container p", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });

    gsap.from(".contact-form input, .contact-form textarea", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.15
    });
}

/* FOR PAGE TRANSITIONS*/

barba.init({
    transitions: [{
        name: 'fade',
        leave({ current }) {
            return gsap.to(current.container, { opacity: 0, duration: 0.2 });
        },
        enter({ next }) {
            return gsap.from(next.container, { opacity: 0, duration: 0.2 });
        }
    }]
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));




