document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para .team-title
    gsap.from(".team-title", {
        y: 50, // Aparece desde abajo
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "bounce.out", // Efecto de rebote
        scrollTrigger: {
            trigger: ".team-title",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Línea de tiempo para los miembros del equipo
    const tlTeam = gsap.timeline({
        scrollTrigger: {
            trigger: ".team-title",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    tlTeam.from("#team-1", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    })
    .from("#team-2", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#team-3", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#team-4", {
        y: 50, // Aparece desde abajo
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3"); // Inicia un poco antes de que termine la animación anterior

    // Animación tipo foto para los miembros adicionales
    const tlMembers = gsap.timeline({
        scrollTrigger: {
            trigger: ".team-members",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    tlMembers.from("#member-1", {
        scale: 0.8, // Aparece con un tamaño reducido
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    })
    .from("#member-2", {
        scale: 0.8, // Aparece con un tamaño reducido
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#member-3", {
        scale: 0.8, // Aparece con un tamaño reducido
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3"); // Inicia un poco antes de que termine la animación anterior
});