document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para el h2
    gsap.from("#sobre-nosotros h2", {
        x: -200, // Aparece desde la izquierda
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: "#sobre-nosotros",
            start: "top center", // Inicia la animación cuando la parte superior del elemento está en el centro de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Animación para .marketeros-text
    gsap.from("#sobre-nosotros .marketeros-text", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#sobre-nosotros",
            start: "top center", // Inicia la animación cuando la parte superior del elemento está en el centro de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Línea de tiempo para los toggles
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#sobre-nosotros",
            start: "top center", // Inicia la animación cuando la parte superior del elemento está en el centro de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    tl.from("#toggle-1", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.7)" // Efecto de carta
    })
    .from("#toggle-2", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.7)" // Efecto de carta
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#toggle-3", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.7)" // Efecto de carta
    }, "-=0.3"); // Inicia un poco antes de que termine la animación anterior

    // Animación para #container-video
    gsap.from("#container-video", {
        scale: 0.8, // Escala inicial
        opacity: 0, // Opacidad inicial
        duration: 1,
        ease: "power2.out", // Efecto de suavizado
        scrollTrigger: {
            trigger: "#container-video",
            start: "top center", // Inicia la animación cuando la parte superior del elemento está en el centro de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });
});