// Calcular la longitud del texto
const textWidth1 = document.querySelector("#divisor-1-text").offsetWidth;
const textWidth2 = document.querySelector("#divisor-2-text").offsetWidth;

// Animación para el texto en divisor-1 (hacia la derecha)
gsap.fromTo("#divisor-1-text", 
    { x: `-${textWidth1 / 2}px` },  // Comienza fuera de la vista por la izquierda
    { 
        x: "0px",  // Se mueve hacia la derecha
        duration: 10,  // Duración de la animación
        ease: "linear",  // Movimiento lineal
        repeat: -1,  // Repetir indefinidamente
        
    }
);

// Animación para el texto en divisor-2 (hacia la izquierda)
gsap.fromTo("#divisor-2-text", 
    { x: "0px" },  // Comienza visible
    { 
        x: `-${textWidth2 / 2}px`,  // Se mueve hacia la izquierda
        duration: 10,  // Duración de la animación
        ease: "linear",  // Movimiento lineal
        repeat: -1,  // Repetir indefinidamente
    }
);