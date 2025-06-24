// toogle icon bar

let mIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

mIcon.onclick=()=>{
    mIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// toggle icon click

let sections=document.querySelector('section');
let navlinks=document.querySelector('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset+ height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    // Sticky navbar

    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar

    mIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin : 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});


// typed js

const typed= new Typed('.multiple-text',{
    strings: ['Software Developer', 'Java FullStack Developer'],
    typeSpeed:70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
});