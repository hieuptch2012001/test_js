let arry = ["hello","hihi","hehe","hoho"];

function chooseName(name){
    document.write("<h1>"+ name + "</h1>");
}


let rand = arry[Math.floor(Math.random() * arry.length)];
chooseName(rand);