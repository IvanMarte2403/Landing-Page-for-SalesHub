document.addEventListener("DOMContentLoaded", function() {
    gsap.fromTo(".title-dias", 
        { scale: 1 }, 
        { scale: 1.2, duration: 1, yoyo: true, repeat: 1 }
    );
});