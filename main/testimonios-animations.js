document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para #title-testimonios
    gsap.from("#title-testimonios", {
        y: 50, // Aparece desde abajo
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "bounce.out", // Efecto de rebote
        scrollTrigger: {
            trigger: "#title-testimonios",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Línea de tiempo para los testimonios
    const tlTestimonios = gsap.timeline({
        scrollTrigger: {
            trigger: ".containerTestimonios",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    tlTestimonios.from("#testimonio-1", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.8,
        ease: "power2.out" // Efecto de suavizado
    })
    .from("#testimonio-2", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.8,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#testimonio-3", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.8,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#tes5timonio-4", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.8,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3"); // Inicia un poco antes de que termine la animación anterior
});