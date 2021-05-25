let arry = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function random(a,b){
    let rand = Math.floor(Math.random() * (b-a))+ a;
    return rand
}
function chooseName(ar){
    let name = ar[random(3,7)];
    return name
}

let a = chooseName(arry);
document.write("<h1>" + a + "</h1>");
