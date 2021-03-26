function change() {     
    var header = document.getElementById("H1");     
    header.innerHTML = "CSIE@CGU";     
    var para = document.getElementById("P");     
    para.innerHTML = "怎麼那麼棒！！."; 
}   

function myFunction(){
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Change this document."
    btn.setAttribute("id", "Btn")
    document.body.appendChild(btn);
    document.getElementById("Btn").addEventListener("click", change);
}
