const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500,
    reset: false
});

ScrollReveal().reveal('.card', { delay: 200 });
ScrollReveal().reveal('.secao_formulario', { delay: 200 });

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 7, 
    startDelay: 1000,
    backDelay: 4000,
    loop: false,
    loopCount: Infinity,
  });