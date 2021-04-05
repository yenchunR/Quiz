function change() {        
    $('#H1').innerHTML = "CSIE@CGU";     
    var $para = $('#P');     
    para.innerHTML = "怎麼那麼棒！！."; 
}   

function myFunction(){
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Change this document."
    btn.setAttribute("id", "Btn")
    document.body.appendChild(btn);
    document.getElementById("Btn").addEventListener("click", change);
}
