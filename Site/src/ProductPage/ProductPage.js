let pos = 1;

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.onclick = () => {
    if (pos == 3) pos = 1;
    else ++pos;

    document.getElementById("main-img").src = `../img/images/${pos}.jpg`
}

prev.onclick = () => {
    if(pos == 1) pos = 3;
    else --pos;

    document.getElementById("main-img").src = `../img/images/${pos}.jpg`
}
    