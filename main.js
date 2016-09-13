$("document").ready(function(){
  console.log("loaded");

  $.get('http://localhost:3000/entries',function(data){
    console.log("retrieving data");
    console.log(data);
    displayLeaderboard(data);
;  }); // get function

}); // ready Event Listener

//Append leaderboard information and display them
function displayLeaderboard(data){

var table = $("<table>");

  for (i = 0; i < data.length; i++){
    var row = $("<tr>");

    var leaderName = $("<td>");
    leaderName.text(data[i].name);
    $(row).append(leaderName);

    var leaderScore = $("<td>");
    leaderScore.text(data[i].score);
    $(row).append(leaderScore);

    var editButton = $("<button>");
    $(editButton).attr({type: "button", name: "edit"}).text("Edit");
    $(row).append(editButton);

    var deleteButton = $("<button>");
    $(deleteButton).attr({type: "button", name: "delete"}).text("Delete");
    $(row).append(deleteButton);

    $(table).append(row);
    $("#leaderboard").append(table);
    }
}
