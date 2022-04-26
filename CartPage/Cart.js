let goods = document.getElementById("list-goods").children;

for(let i = 0; i < goods.length; i++)
{
    goods[i].onclick = () => {
        document.getElementById("left-image").style.background = `url(${goods[i].children[0].src}) no-repeat top center / cover` ;
        // alert(good[i].firstChild.src);
    }
}