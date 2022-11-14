const NAME = 'name';
const savedName = localStorage.getItem(NAME);
const scd = document.getElementById('main-s2-schadule');
const scdFtr = document.getElementById('main-s2-footer');
const n = document.getElementById('name');

function Name1(){
    localStorage.setItem(NAME, "김도혁");
    n.style.display = 'none'
    scd.classList.remove('dp-none');
    scdFtr.classList.remove('dp-none');
}
function Name2(){
    localStorage.setItem(NAME, "한강익");
    n.style.display = 'none'
    scd.classList.remove('dp-none');
    scdFtr.classList.remove('dp-none');
}
function Name3(){
    localStorage.setItem(NAME, "박정진");
    n.style.display = 'none'
    scd.classList.remove('dp-none');
    scdFtr.classList.remove('dp-none');
}
function Name4(){
    localStorage.setItem(NAME, "김우섭");
    n.style.display = 'none'
    scd.classList.remove('dp-none');
    scdFtr.classList.remove('dp-none');
}
function Name5(){
    localStorage.setItem(NAME, "백종훈");
    n.style.display = 'none'
    scd.classList.remove('dp-none');
    scdFtr.classList.remove('dp-none');
}
if(savedName !== null){
    n.style.display = 'none';
    scd.classList.remove('dp-none');
    scdFtr.classList.remove('dp-none');
}