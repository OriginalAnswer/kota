const time = document.getElementById('s1-time-span');
function getTime(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    time.innerText = `${h}:${m}`;
};
const today = document.getElementById('s1-date-span');
function getDate(){
    const date = new Date();
    const d = String(date.getDate());
    today.innerText = `${d}일`;
};
getDate();
setInterval(getTime, 1000);
