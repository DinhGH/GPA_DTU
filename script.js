var inp = document.getElementsByTagName('input');
var opt = document.getElementsByTagName('option');


function cal(){
    for(let i=2; i< inp.length-1; i=i+3) {
        inp[i].value = inp[i-1].value * inp[i-2].value;
    }
}

function gpa(){ 
    let total = 0;
    for(let i=2; i< inp.length-1; i=i+3) {
        total += Number(inp[i].value);
    }
    inp[inp.length-1].value = total;
}

function cgpa(){
    let gpa = 0;
    for(let i=1; i< opt.length; i++) {
        gpa += Number(opt[i].value);
    }
    let sp = 0, sd = 0;
    for(let i=0; i< inp.length-1; i++) {
        if(i%3==0 || i==0)
            sp += Number(inp[i].value);
        if(i%3==2)
            sd += Number(inp[i].value);
    }
    alert("sp: " + sp + " sd: " + sd + " gpa: " + gpa);
    inp[inp.length-1].value = ((gpa - sd) / (1-sp));
}