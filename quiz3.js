var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"; 
var data = $.getJSON(dataUrl); 

data.done( function( msg ) {
    //console.log(msg.results);
    $.each(msg.result.results, function(i, re){
       
       $("#contain").html();
       $("#contain").append($("<h2/>").text(re.A_Name_Ch));//A_Name_Ch編碼問題，因為json產生問題
       $("#contain").append($("<h3/>").text(re.A_Behavior));
       if(re.A_Pic01_URL){
           $("#contain").append($("<img/>").attr("src", re.A_Pic01_URL));
       }
    }) 
}); 
data.fail( function( msg ) { 
    console.log(msg);
    $("#contain").html("fail getting data");
});