function setDday(){
    const htmlDday = document.getElementById('dday')
    // const startdate = 20221117;
    // const sy = 2022;
    // const sm = 11;
    const sd = 17;

    const thisdate = new Date();
    // const ty = thisdate.getFullYear();
    // const tm = thisdate.getMonth()+1;
    const td = thisdate.getDate();

    // const ry = ty - sy;
    // const rm = tm - sm;
    const rd = td - sd;

    let dd = rd;
    if(rd >= 0){
        dd = rd + 1;
    }
    // console.log(ry);
    // console.log(rm);
    // console.log(rd);
    console.log(dd);
    htmlDday.innerText = `DAY${dd}`;
};
setDday();