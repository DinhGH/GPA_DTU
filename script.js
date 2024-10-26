var inp = document.getElementsByTagName('input');
var opt = document.getElementsByTagName('option');
var disp = document.getElementById('md');
var redi = document.getElementById('redi');

function cal(){
    for(let i=2; i< inp.length-1; i=i+3) {
        inp[i].value = (inp[i-1].value * inp[i-2].value).toFixed(2);
    }
}

var gpac = 0;
function gpa(x){ 
    gpac = x.value;
}

function gpa1(){
    let sd = 0;
    for(let i=0; i< inp.length-1; i++) {
        if(i%3==2)
            sd += Number(inp[i].value);
    }
    inp[inp.length-1].value = sd.toFixed(2);
}

function cgpa(){
    let sp = 0, sd = 0;
    for(let i=0; i< inp.length-1; i++) {
        if(i%3==0 || i==0)
            sp += Number(inp[i].value);
        if(i%3==2)
            sd += Number(inp[i].value);
    }
    // alert(gpac+""+sd+""+sp);
    redi.innerHTML= "Bạn phải hoàn thành các cột còn lại với "+((gpac - sd) / (1-sp)).toFixed(2)+" điểm";
    disp.showModal();
}
function overp(x){
    if(x.value >1 || x.value < 0)
        alert("Vượt quá giới hạn: 0.00 -> 1.00\nVí dụ: 5% = 0.05; 10% = 0.1; 15% = 0.15");
}
function overd(x){
    if(x.value >10 || x.value < 0)
        alert("Vượt quá giới hạn: 0.00 -> 10.00");
   
}
function exit(){
    disp.close();
}