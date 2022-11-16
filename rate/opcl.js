
const c1 = document.getElementById('checkbox1');
const c2 = document.getElementById('checkbox2');
const c3 = document.getElementById('checkbox3');
const c4 = document.getElementById('checkbox4');
const c5 = document.getElementById('checkbox5');
const c6 = document.getElementById('checkbox6');
const d1p = document.getElementById('d1p');
const d2p = document.getElementById('d2p');
const d3p = document.getElementById('d3p');
const d4p = document.getElementById('d4p');
const d5p = document.getElementById('d5p');
const d6p = document.getElementById('d6p');
const d1t = document.getElementById('d1t');
const d2t = document.getElementById('d2t');
const d3t = document.getElementById('d3t');
const d4t = document.getElementById('d4t');
const d5t = document.getElementById('d5t');
const d6t = document.getElementById('d6t');

c1.addEventListener('click',() =>{
    if (event.target.checked) {
        d1p.classList.remove('hidden');
        d1t.classList.remove('hidden');
    } else {
        d1p.classList.add('hidden')
        d1t.classList.add('hidden')
    }
})
c2.addEventListener('click',() =>{
    if (event.target.checked) {
        d2p.classList.remove('hidden');
        d2t.classList.remove('hidden');
    } else {
        d2p.classList.add('hidden')
        d2t.classList.add('hidden')
        
    }
})
c3.addEventListener('click',() =>{
    if (event.target.checked) {
        d3p.classList.remove('hidden');
        d3t.classList.remove('hidden');
    } else {
        d3p.classList.add('hidden')
        d3t.classList.add('hidden')
        
    }
})
c4.addEventListener('click',() =>{
    if (event.target.checked) {
        d4p.classList.remove('hidden');
        d4t.classList.remove('hidden');
    } else {
        d4p.classList.add('hidden')
        d4t.classList.add('hidden')
        
    }
})
c5.addEventListener('click',() =>{
    if (event.target.checked) {
        d5p.classList.remove('hidden');
        d5t.classList.remove('hidden');
    } else {
        d5p.classList.add('hidden')
        d5t.classList.add('hidden')
        
    }
})
c6.addEventListener('click',() =>{
    if (event.target.checked) {
        d6p.classList.remove('hidden');
        d6t.classList.remove('hidden');
    } else {
        d6p.classList.add('hidden')
        d6t.classList.add('hidden')
        
    }
})