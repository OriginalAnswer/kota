const NAME = 'name';
const savedName = localStorage.getItem(NAME);
const scd = document.getElementById('main-s2-schadule');
const scdFtr = document.getElementById('main-s2-footer');
const n = document.getElementById('name');

function Name1(){
    localStorage.setItem(NAME, "도혁");
    n.style.display = 'none'
    scd.classList.remove('hidden');
    scdFtr.classList.remove('hidden');
}
function Name2(){
    localStorage.setItem(NAME, "강익");
    n.style.display = 'none'
    scd.classList.remove('hidden');
    scdFtr.classList.remove('hidden');
}
function Name3(){
    localStorage.setItem(NAME, "정진");
    n.style.display = 'none'
    scd.classList.remove('hidden');
    scdFtr.classList.remove('hidden');
}
function Name4(){
    localStorage.setItem(NAME, "우섭");
    n.style.display = 'none'
    scd.classList.remove('hidden');
    scdFtr.classList.remove('hidden');
}
function Name5(){
    localStorage.setItem(NAME, "종훈");
    n.style.display = 'none'
    scd.classList.remove('hidden');
    scdFtr.classList.remove('hidden');
}
if(savedName !== null){
    n.style.display = 'none';
    scd.classList.remove('hidden');
    scdFtr.classList.remove('hidden');
}