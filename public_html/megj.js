window.addEventListener("load", init);

function $(nev){
    
    return document.querySelectorAll(nev);
}


var kep1 = {
    
    eleresiut: "Tixi.JPG",
    cim: "Első cím",
    leiras: "Első leírás"
};
var kep2 = {
    
    eleresiut: "Tixi2.JPG",
    cim: "Második cím",
    leiras: "Második leírás"
};


var kepekTomb = [kep1, kep2];


function init(){
    
//    console.log("Üdv!");
//    $("section")[0].innerHTML = "Hello";
    
    
    
    for (var i = 0; i < kepekTomb.lengt; i++) {
        
        var elem = '<div> <h3></h3> <img id=" '+i+' " src="" alt=""/> <p></p> </div>';
        
        $("article")[0].innerHTML += elem;
    }
    
    console.log(kepekTomb);
    for (var i = 0; i < $("article img").length; i++) {
        
        $("article img")[i].src = kepekTomb[i].eleresiut;
        $("article img")[i].src = kepekTomb[i]["eleresiut"];
        $("article h3")[i].innerHTML = kepekTomb[i].cim;
        $("article p")[i].innerHTML = kepekTomb[i].leiras;
        
        
    }
    
    for (var i = 0; i < kepekTomb.lengt; i++) {
       
        console.log(kepekTomb[i].eleresiut);
        $("article div img")[i].addEventListener("click", betolt);
    }
    
    
}

function betolt(){
    
    var index = this.id;
    
    console.log(kepekTomb[index].eleresiut);
    console.log(kepekTomb[index].cim);
    console.log(kepekTomb[index].leiras);
    
    $("section div img")[0].src = kepekTomb[index].eleresiut;
    $("section div img")[0].innerHTML = kepekTomb[index].cim;
    $("section div img")[0].innerHTML = kepekTomb[index].leiras;
}


function bal(){
    
    
}
function jobb(){
    
    
}