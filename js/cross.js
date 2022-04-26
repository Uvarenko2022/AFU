if (document.getElementById("goods-row1") != null)
{
    let frow = document.getElementById("goods-row1").children;
    let srow = document.getElementById("goods-row2").children;

    for(let i = 0; i < frow.length; i++)
    {
        frow[i].children[0].children[0].onclick = () => {
            let path = window.getComputedStyle(frow[i].children[0].children[0]).backgroundImage.toString();
            path = path.split('/').splice(4, 5).join('/');
            localStorage.setItem("path", path);
        };
    
        srow[i].children[0].children[0].onclick = () => {
            let path = window.getComputedStyle(srow[i].children[0].children[0]).backgroundImage.toString();
            path = path.split('/').splice(4, 5).join('/');
            localStorage.setItem("path", path);
        }
    }
}


let dropcontent = document.getElementById("drop-content").children;

for(let i = 0; i < dropcontent.length; i++)
{
    dropcontent[i].children[0].onclick = () => {
        setparams(i + 1);
    }
}


function setparams(type)
{
    if (type == 1)
    {
        //Number of rows
        localStorage.setItem("rows", "2");

        //Names
        localStorage.setItem("name-1", "Літальні апарати");
        localStorage.setItem("name-2", "Танки");

        //elements in row

        localStorage.setItem("row-1-number", "4");
        localStorage.setItem("row-2-number", "4");

        //Paths to images
        localStorage.setItem("row-1-1", "../img/images/Heavy/airplanes/Bayraktar_TB2");
        localStorage.setItem("row-1-2", "../img/images/Heavy/airplanes/L-39_Albatros");
        localStorage.setItem("row-1-3", "../img/images/Heavy/airplanes/Ми-8");
        localStorage.setItem("row-1-4", "../img/images/Heavy/airplanes/Су-27");

        localStorage.setItem("row-2-1", "../img/images/Heavy/tanks/BM_Oplot");
        localStorage.setItem("row-2-2", "../img/images/Heavy/tanks/Т-64БВ");
        localStorage.setItem("row-2-3", "../img/images/Heavy/tanks/Т-64БМ_Bulat");
        localStorage.setItem("row-2-4", "../img/images/Heavy/tanks/Т-72");
    }

    if (type == 2)
    {
         //Number of rows
         localStorage.setItem("rows", "4");

         //Names
         localStorage.setItem("name-1", "Автомати");
         localStorage.setItem("name-2", "Гранатомети");
         localStorage.setItem("name-3", "Пістолети");
         localStorage.setItem("name-4", "Гвинтівки");
 
         //elements in row
 
         localStorage.setItem("row-1-number", "4");
         localStorage.setItem("row-2-number", "1");
         localStorage.setItem("row-3-number", "4");
         localStorage.setItem("row-4-number", "4");
 
         //Paths to images
         localStorage.setItem("row-1-1", "../img/images/Light/automate/Ak-47");
         localStorage.setItem("row-1-2", "../img/images/Light/automate/P90");
         localStorage.setItem("row-1-3", "../img/images/Light/automate/PP-19_Bizon");
         localStorage.setItem("row-1-4", "../img/images/Light/automate/М16");
 
         localStorage.setItem("row-2-1", "../img/images/Light/greneda_launcher/NLAW");
         
         localStorage.setItem("row-3-1", "../img/images/Light/pistols/APS");
         localStorage.setItem("row-3-2", "../img/images/Light/pistols/Beretta_92");
         localStorage.setItem("row-3-3", "../img/images/Light/pistols/Desert_Eagle");
         localStorage.setItem("row-3-4", "../img/images/Light/pistols/Sig_Sauer_P250_Compact");
         
         localStorage.setItem("row-4-1", "../img/images/Light/rifles/G36");
         localStorage.setItem("row-4-2", "../img/images/Light/rifles/LRT-3_50_BMG");
         localStorage.setItem("row-4-3", "../img/images/Light/rifles/SVD");
         localStorage.setItem("row-4-4", "../img/images/Light/rifles/ВМ2");
    }

    if (type == 3)
    {
        //Number of rows
        localStorage.setItem("rows", "3");

        //Names
        localStorage.setItem("name-1", "Броня");
        localStorage.setItem("name-2", "Каска");
        localStorage.setItem("name-3", "Гранати");

        //elements in row

        localStorage.setItem("row-1-number", "1");
        localStorage.setItem("row-2-number", "4");
        localStorage.setItem("row-2-number", "1");

        //Paths to images
        localStorage.setItem("row-1-1", "../img/images/amunition/armour/default_armour");

        localStorage.setItem("row-2-1", "../img/images/amunition/helmets/default_helmets");

        localStorage.setItem("row-3-1", "../img/images/amunition/granades/Bandera-smuzi");
        localStorage.setItem("row-3-2", "../img/images/amunition/granades/F-1");
        localStorage.setItem("row-3-3", "../img/images/amunition/granades/TAG_FBG");
        localStorage.setItem("row-3-4", "../img/images/amunition/granades/М18");
    }
}

