$("document").ready(function(){
  console.log("loaded");

  $.get('http://localhost:3000/entries',function(data){
    console.log("retrieving data");
    console.log(data);
    displayLeaderboard(data);
;  }); // get function

  $(document).on('click','#addButton',function(){
    console.log("add button clicked");
    var name = $('#newName').val();
    var score = $('#newScore').val();

    $.ajax({
      url: "http://localhost:3000/entries",
      type: "POST",
      data: {name: name,
            score: score}
    }).done(function(response){
        displayLeaderboard(response);
      }).fail(function(){
          console.log("loading failed");
      })
  }); //addButton

}); // document ready Event Listener

//Append leaderboard information and display them
function displayLeaderboard(data){
  $('#leaderboard').empty();

var table = $("<table id='leaderTable'>");

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

  $("#leaderTable").append('<tr>'+
                            '<td><input type="text" name="name" id="newName"></input></td>' +
                            '<td><input type="number" name="score" id="newScore"></input></td>' +
                            '<td><button type="button" name="add" id="addButton">Add</button></td>' +
                            '</tr>');

  $("#leaderboard").append(table);

}
