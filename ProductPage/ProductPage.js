let pos = 1;

let path = localStorage.getItem("path");

console.log(path);

document.getElementById("main-img").src = "../" + path + "/1.jpg";

for(let i = 0; i < 3; i++)
{
    document.getElementById("img-stack").children[i].src = "../" + path + `/${i + 1}.jpg`
}

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.onclick = () => {
    if (pos == 3) pos = 1;
    else ++pos;

    document.getElementById("main-img").src = "../" + path + `/${pos}.jpg`;
}

prev.onclick = () => {
    if(pos == 1) pos = 3;
    else --pos;

    document.getElementById("main-img").src = "../" + path + `/${pos}.jpg`;
}
