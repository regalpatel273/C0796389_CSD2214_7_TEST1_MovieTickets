var $ = function(id){
    return document.getElementById(id);
}
var seatSelection = function(){
    var movie = $("movies");
    var counter = 0;
    
}
window.onload = function(){
    $("confirmselection").onclick = seatSelection;
}