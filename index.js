const timeKR = document.getElementById('s1-time-kr-span');
function getTimeKR(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    const s = String(date.getSeconds()).padStart(2,"0");
    timeKR.innerText = `${h}:${m}`;
};
const timeKK = document.getElementById('s1-time-kk-span');
function getTimeKK(){
    var kota_offset = 4*60;
    const date = new Date();
    date.setMinutes(date.getMinutes()+kota_offset);
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    // const s = String(date.getSeconds()).padStart(2,"0");
    timeKK.innerText = `${h}:${m}`;
};
// 
const today = document.getElementById('s1-date-span');
const mArr = new Array('Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','11','Dec');
function getDate(){
    const date = new Date();
    const m = date.getMonth();
    const d = String(date.getDate());
    today.innerText = `${mArr[m]}/${d}`;
};
getDate();
setInterval(getTimeKK, 1000);
setInterval(getTimeKR, 1000);
