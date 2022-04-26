let rows_number = Number(localStorage.getItem("rows"));

let rows = document.getElementById("product-list-content");

for (let i = 0; i < rows_number; i++)
{

    if (rows_number < rows.children.length)
    {
        rows.removeChild(rows.children[rows.children.length - 1]);
    }

    rows.children[i].children[0].innerHTML = localStorage.getItem(`name-${i + 1}`);

    for (let j = 0; j < Number(localStorage.getItem(`row-${i + 1}-number`)); j++)
    {
        let currentrow = rows.children[i].children[1];

        while (Number(localStorage.getItem(`row-${i + 1}-number`)) < currentrow.children.length )
        {
            currentrow.removeChild(currentrow.children[currentrow.children.length - 1])
        }

        let path = localStorage.getItem(`row-${i + 1}-${j + 1}`);
        rows.children[i].children[1].children[j].children[0].style.background = `white url(${path}/main.jpg) no-repeat center center / contain`;
        rows.children[i].children[1].children[j].children[0].onclick = () => {
            path = path.slice(3);
            console.log(path);
            localStorage.setItem("path", path);
            window.location.href ="../ProductPage/Productpage.html";
        }
    }
}







