var tags = "貓"; 
var dataUrl = "https://api.flickr.com/services/feeds/photos\_public.gne?tags=" + tags +"&tagmode=any&format=json&per_page=400&jsoncallback=?";
var data = $.getJSON(dataUrl); 
data.done( function( msg ) 
{ 
    $.each(msg.items, function(i, item){
        console.log(msg);
       $("#contain").html();
       $("#contain").append($("<h2>" + item.title +"</h2>"));
       })
});
data.fail( function( msg ) {
  console.log(msg);
  $("#contain").html("fail getting data");
});
