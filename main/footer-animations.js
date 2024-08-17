gsap.to(".white-text", {
    scrollTrigger: {
      trigger: ".footer-title",
      start: "top 80%", // Comienza la animación cuando el top del trigger esté en el 80% de la vista
      toggleActions: "play none none none"
    },
    duration: 1,
    text: "EMPIEZA A VENDER MAS DANDO",
    opacity: 1,
    ease: "power1.inOut"
  });
  
  gsap.to(".pink-text", {
    scrollTrigger: {
      trigger: ".footer-title",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 2,
    text: "CLICK AQUI",
    opacity: 1,
    delay: 1,
    ease: "power1.inOut"
  });''