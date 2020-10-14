$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.firstName);
  });

  //When the page is loaded, hide the edit information forums
  $("#addUserinfo").hide();
  $("#editJobinfo").hide();

  //When the edit information button is clicked...
  $("#editBtn").on("click", function() {
    //Hide user info, job history, & 'generate resume' button and display the 'edit user information' handlebars card
      $("#userinfo").hide();
      $("#jobHist").hide();
      $("#generateResumeBtn").hide();
      $("#addUserinfo").show();
  });

  //When the 'finish editing' button is clicked...
  $("#finishBtn").on("click", function() {
    //hide the 'edit' text box and return to the normal dashboard page
    $("#addUserinfo").hide();
    $("#jobHist").show();
    $("#userinfo").show();
    $("#generateResumeBtn").show();
  });

  //When the 'edit job history' button is clicked...
  $("#editJobBtn").on("click", function() {
      //Hide user info, job history, & 'generate resume' button and display the 'edit job history' handlebars card
    $("#jobHist").hide();
    $("#userinfo").hide();
    $("#generateResumeBtn").hide();
    $("#editJobinfo").show();
  });

  //When the 'finish editing' button is clicked...
  $("#finishJobBtn").on("click", function() {
      //hide the 'edit' text box and return to the normal dashboard page
    $("#jobHist").show();
    $("#userinfo").show();
    $("#generateResumeBtn").show();
    $("#editJobinfo").hide();
  })
});


