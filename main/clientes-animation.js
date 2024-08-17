document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para .clientes-title
    gsap.from(".clientes-title", {
        y: 50, // Aparece desde abajo
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "bounce.out", // Efecto de rebote
        scrollTrigger: {
            trigger: ".clientes-title",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Animación para el párrafo dentro de .clientes-title
    gsap.from(".clientes-title p", {
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "power2.out", // Efecto de suavizado
        scrollTrigger: {
            trigger: ".clientes-title p",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Animación para .row-clientes
    gsap.from(".row-clientes", {
        opacity: 0, // Opacidad inicial
        duration: 1, // Duración de la animación
        ease: "power2.out", // Efecto de suavizado
        scrollTrigger: {
            trigger: ".row-clientes",
            start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    // Línea de tiempo para los clientes
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#clientes-title",
            start: "top center", // Inicia la animación cuando la parte superior del elemento está en el centro de la pantalla
            toggleActions: "play none none none" // Reproduce la animación al entrar en la vista
        }
    });

    tl.from("#cliente-1", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    })
    .from("#cliente-2", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#cliente-3", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3") // Inicia un poco antes de que termine la animación anterior
    .from("#cliente-4", {
        x: -200, // Aparece desde la izquierda
        opacity: 0,
        duration: 0.5,
        ease: "power2.out" // Efecto de suavizado
    }, "-=0.3"); // Inicia un poco antes de que termine la animación anterior

    // Animación de movimiento leve para los iconos dentro de cada cliente
    const clientes = ["#cliente-1", "#cliente-2", "#cliente-3", "#cliente-4"];
    clientes.forEach(cliente => {
        gsap.fromTo(`${cliente} i`, {
            x: -10 // Posición inicial a la izquierda
        }, {
            x: 10, // Posición final a la derecha
            duration: 1, // Duración de la animación
            ease: "power1.inOut", // Efecto de suavizado
            yoyo: true, // Hace que la animación vaya y vuelva
            repeat: 1, // Repite una vez
            scrollTrigger: {
                trigger: cliente,
                start: "top 80%", // Inicia la animación cuando la parte superior del elemento está en el 80% de la pantalla
                toggleActions: "play none none   none" // Reproduce la animación al entrar en la vista
            },
            onComplete: () => {
                gsap.to(`${cliente} i`, { x: 0, duration: 0.5 }); // Vuelve a la posición inicial
            }
        });
    });
});