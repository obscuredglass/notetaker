// variables

var $nShow = $("#nShow");
var $newerDisplay = $("#newerDisplay");



// append notes to/from schema
const noteQuery = () => {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then((nData) => {
    console.log(nData)
    for (var i = 0; i < nData.length; i++) {
      var $listItem = $("<div class='card mt-4'>");
      console.log(nData[i])
      var $nList = $("<ul>");
      $nList.append(
        $("<h2>").text(nData[i].note_title),
        $("<h5>").text(nData[i].note_body),
        $("<p>").text(nData[i].created_at)
      );
      $listItem.append($nList);
      $newerDisplay.append($listItem);
    };
    
  });
};



// submit note
const submitOnClick = (event) => {
  event.preventDefault();

  var newData = {
    title: $("#nTitle").val().trim(),
    body: $("#nBody").val().trim()
  }

// ajax api call
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: newData
  }).then((data) => {
    if (data) {
      alert("Note added");
    } else {
      console.log(err)
    };
    $("#nTitle").empty();
    $("#nBody").empty();
    $newerDisplay.empty();
    noteQuery();
  });
};

//display the note on click

$nShow.on("click", function(event){
  event.preventDefault();
  $newerDisplay.empty();
  noteQuery();
});

$("#nSubmit").on("click", submitOnClick);