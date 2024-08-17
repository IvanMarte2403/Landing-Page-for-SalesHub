document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para .title-container-servicios h1
    gsap.from(".title-container-servicios h1", {
        y: 50, // Aparece desde abajo
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "bounce.out", // Efecto de rebote
        scrollTrigger: {
            trigger: ".title-container-servicios h1",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Animación para el botón .bottom-descubre-mas
    gsap.from(".bottom-descubre-mas", {
        scale: 0.8, // Escala inicial
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "power2.out", // Efecto de suavizado
        scrollTrigger: {
            trigger: ".bottom-descubre-mas",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Línea de tiempo para los servicios
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#servicios",
            start: "top center", // Inicia la animación cuando la parte superior del elemento está en el centro de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    tl.from("#servicio-1", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    })
    .from("#servicio-2", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#servicio-3", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#servicio-4", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3"); // Inicia un poco antes de que termine la animación anterior

    // Animación de parpadeo para los iconos dentro de cada servicio
    const servicios = ["#servicio-1", "#servicio-2", "#servicio-3", "#servicio-4"];
    servicios.forEach(servicio => {
        gsap.from(`${servicio} i`, {
            opacity: 0,
            duration: 0.5,
            repeat: 1, // Repite una vez
            yoyo: true, // Hace que la animación vaya y vuelva
            ease: "power2.inOut", // Efecto de suavizado
            scrollTrigger: {
                trigger: servicio,
                start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
                toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
            }
        });
    });
});