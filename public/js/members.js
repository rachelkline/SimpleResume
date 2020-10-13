$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.firstName);
  });

  // $("#log-out").on("click", function(){
  //   window.location.replace("/login")
  // })
});


