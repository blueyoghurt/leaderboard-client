$("document").ready(function(){
  console.log("loaded");

  .get('URL',function(data){
    console.log(data);
  }); // get functiona

}); // ready Event Listener

//Append leaderboard information and display them
function displayLeaderboard(data){

  for (i = 0; i < data.length; i++){
    var row = $("<tr>");

    var cell = $("cell");
    cell.text = data[i].name;
    

  }

}
