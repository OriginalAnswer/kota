// const mArr = new Array('Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','11','Dec');
//로컬타임 하나
const tt = document.getElementById('main-s1-thistime-time');
function getThistime(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    tt.innerText = `${h}:${m}`;
};
setInterval(getThistime, 1000);

const mainDate = document.getElementById('main-s1-thistime-date');
const mainDay = document.getElementById('main-s1-thistime-day');
function getDateMain(){
    const date = new Date();
    const m = date.getMonth();
    const d = String(date.getDate());
    today.innerText = `${mArr[m]}/${d}`;
};
getDateMain();
