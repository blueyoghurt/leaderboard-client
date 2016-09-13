$("document").ready(function(){
  console.log("loaded");

  .get('URL',function(data){
    console.log("retrieving data");
    console.log(data);
    displayLeaderboard(data);
;  }); // get function

}); // ready Event Listener

//Append leaderboard information and display them
function displayLeaderboard(data){

  for (i = 0; i < data.length; i++){
    var row = $("<tr>");

    var leaderName = $("<td>");
    leaderName.text = data[i].name;
    $(row).append(leaderName);

    var leaderScore = $("<td>");
    leaderScore.text = data[i].score;
    $(row).append(leaderScore);

    $(row).append("<td>").("<button>").attr("type","button").attr("name","edit").text("Edit");
    $(row).append("<td>").("<button>").attr("type","button").attr("name","delete").text("Delete");
  }
}
