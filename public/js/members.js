$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.firstName);
  });

  $("#addUserinfo").hide();
  $("#editBtn").on("click", function() {
      $("#userinfo").hide();
      $("#addUserinfo").show();
  });

  $("#finishBtn").on("click", function() {
    $("#addUserinfo").hide();
    $("#userinfo").show();
  })
});


