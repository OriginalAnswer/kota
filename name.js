const NAME = 'name';
const savedName = localStorage.getItem(NAME);
const names = document.getElementById('name');

if(savedName !== null){
    const scd = document.getElementById('main-s2-schadule');
    scd.classList.remove('dp-none');
}else{
    names.classList.add('dp-none');
}
// JSON.stringify(nameArr)
function Name1(){
    localStorage.setItem(NAME, "김도혁");
    names.classList.add('dp-none');
}
function Name2(){
    localStorage.setItem(NAME, "한강익");
    names.classList.add('dp-none');
}
function Name3(){
    localStorage.setItem(NAME, "박정진");
    names.classList.add('dp-none');
}
function Name4(){
    localStorage.setItem(NAME, "김우섭");
    names.classList.add('dp-none');
}
function Name5(){
    localStorage.setItem(NAME, "백종훈");
    names.classList.add('dp-none');
}