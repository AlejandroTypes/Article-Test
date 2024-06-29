document.getElementById("share-button-two").style.display = "none";
document.getElementById("share-arrow-two").style.display = "none";
document.getElementById("flexlink-box").style.display="none";

function asd(a)
{
    if(a == 1){
    document.getElementById("share-button-two").style.display="";
    document.getElementById("share-arrow-two").style.display = "";
    document.getElementById("flexlink-box").style.display="";
    document.getElementById("share-arrow-one").style.display = "none";
    document.getElementById("share-button-one").style.display="none";
    }else if(a == 2){
    document.getElementById("share-button-one").style.display="";
    document.getElementById("share-arrow-one").style.display = "";
    document.getElementById("share-arrow-two").style.display = 'none';
    document.getElementById("flexlink-box").style.display="none";
    document.getElementById("share-button-two").style.display="none";
    };
}