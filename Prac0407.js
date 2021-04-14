/*
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
*/
var dataUrl = "https://www.dcard.tw/service/api/v2/forums/cgu/posts?popular=true&limit=30"; 
var data = $.getJSON(dataUrl); 
data.done( function( msg ) { 
  function update_dcard_cgu_forums(msg) {   
    $.each(msg.items, function(i,item) {     
      $("#contain").html();     
      $("#contain").append($("<h2/>").text(item.title));            
      $("#contain").append($("<h3/>").text(item.excerpt));  
      if (item.mediaMeta) {     
        $("#contain").append($("<img/>").attr("src", item.mediaMeta[0].url));
       }   
      });
    }
}); 
  data.fail( function( msg ) {
     console.log(msg);
    });
