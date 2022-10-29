// hover
const hover  = document.querySelector('.hover');
const menu = document.querySelector('.menu')
const menuli = document.querySelector('.menuli')

menu.addEventListener('mouseover', ()=> {
    menuli.classList.add('menuhover')
})
menu.addEventListener('mouseleave', ()=> {
    menuli.classList.remove('menuhover')
})

// animation du texte
const sect = document.querySelector('.section1');
const phrase = sect.textContent; 
const arrphrase = phrase.split('');

let idx = 0;
let timer
function char(tbs) {
    sect.innerHTML = ""
    const long = tbs.length;
    timer = setInterval(()=> {
        if (idx <= long && long >= idx) {
            if(idx != long) {
                sect.innerHTML += tbs[idx];
                idx++;
                if (tbs[idx] === " ") {
                    sect.innerHTML += " ";
                }
            }
            if(idx === long) {
                clearInterval(timer)
            }
            
        }
    }, 50)
}
char(arrphrase)


// observation du header et ajout .headerfix
let target = document.querySelector('header');
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting == false && entry.   intersectionRatio == 0) {
            entry.target.classList.add('headerfix')
        }
    })
})
observer.observe(target);
// observation du .haut et retrait du .headerfix
let target2   = document.querySelector('.haut');
let observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting == true) {
            target.classList.remove('headerfix')
        }
    })
})
observer2.observe(target2);

// observation du #section2 et ajout .darkbody
let target3 = document.querySelector('#section2');
let body    = document.querySelector('body');
let observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting == true) {
            body.classList.add('dark')
        }
        if(entry.intersectionRatio == 0 && entry.isIntersecting == false) {
            body.classList.remove('dark')
        }
    })
})
observer3.observe(target3);

// observation du footer
let target4 = document.querySelector('footer');
let footer   = document.querySelector('footer');
let observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting == true) {
            // body.classList.remove('dark')
            body.classList.add('dark')
        }
        if(entry.intersectionRatio == 0 && entry.isIntersecting == false) {
            body.classList.remove('dark')
        }
    })
})
observer4.observe(target4);


const cheched = document.querySelector('input[type = checkbox]')
const voile   = document.querySelector('body > div')
cheched.addEventListener('click', ()=> {
    if (cheched.checked == true) {
        voile.classList.add('voile')
    }
    if (cheched.checked == false) {
        voile.classList.remove('voile')
    }
})

let carrerp = document.querySelectorAll('.carrer p')
carrerp.forEach((cr)=> {
    cr.classList.add('slide')
})