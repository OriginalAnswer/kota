// const mArr = new Array('Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','11','Dec');
const mainDate = document.getElementById('main-s1-thistime-date');
const mainDay = document.getElementById('main-s1-thistime-day');
const wArr = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
function getDateMain(){
    const date = new Date();
    const d = String(date.getDate());
    const dy = String(date.getDay());
    mainDate.innerText = `${d}`;
    mainDay.innerText = `${wArr[dy]}`;
};
getDateMain();
//로컬타임 기본하나일 때
const tt = document.getElementById('main-s1-thistime-time');
function getThistime(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    tt.innerText = `${h}:${m}`;
};
setInterval(getThistime, 1000);
