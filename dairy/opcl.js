
const c1 = document.getElementById('checkbox1');
const c2 = document.getElementById('checkbox2');
const c3 = document.getElementById('checkbox3');
const c4 = document.getElementById('checkbox4');
const c5 = document.getElementById('checkbox5');
const c6 = document.getElementById('checkbox6');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');

c1.addEventListener('click',() =>{
    if (event.target.checked) {
        d1.classList.remove('hidden');
    } else {
        d1.classList.add('hidden')
    }
})
c2.addEventListener('click',() =>{
    if (event.target.checked) {
        d2.classList.remove('hidden');
    } else {
        d2.classList.add('hidden')
    }
})
c3.addEventListener('click',() =>{
    if (event.target.checked) {
        d3.classList.remove('hidden');
    } else {
        d3.classList.add('hidden')
    }
})
c4.addEventListener('click',() =>{
    if (event.target.checked) {
        d4.classList.remove('hidden');
    } else {
        d4.classList.add('hidden')
    }
})
c5.addEventListener('click',() =>{
    if (event.target.checked) {
        d5.classList.remove('hidden');
    } else {
        d5.classList.add('hidden')
    }
})
c6.addEventListener('click',() =>{
    if (event.target.checked) {
        d6.classList.remove('hidden');
    } else {
        d6.classList.add('hidden')
    }
})