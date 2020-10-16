$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.firstName);
    console.log(data.firstName);
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

  });

  //When the 'generate resume' button is clicked...
  $("#generateResumeBtn").on("click", function() {
    //send the user to the 'generate resume' page
    window.location.replace("/generate");
  });

  //tool tips
  $(".tooltipped").tooltip();

  // drop down navbar
  $(".dropdown-trigger").dropdown();

  $('.parallax').parallax();

 
  const jobOneTitleInput = $("input#job1-title");
  const employmentOneDatesInput = $("input#employment1-dates");
  const employerOneInput = $("input#employer1");
  const jobOneDutiesInput = $("input#job1-duties");
  const jobTwoTitleInput = $("input#job2-title");
  const employmentTwoDatesInput = $("input#employment2-dates");
  const employerTwoInput = $("input#employer2");
  const jobTwoDutiesInput = $("input#job2-duties");
  
    
  $("#finishJobBtn").on("click", event => {
    event.preventDefault();
    const userData = {
      jobOneTitle: jobOneTitleInput.val().trim(),
      employerOne: employerOneInput.val().trim(),
      employmentOneDates: employmentOneDatesInput.val().trim(),
      responsibilitiesOne: jobOneDutiesInput.val().trim(),
      jobTwoTitle: jobTwoTitleInput.val().trim(),
      employerTwo: employerTwoInput.val().trim(),
      employmentTwoDates: employmentTwoDatesInput.val().trim(),
      responsibilitiesTwo: jobTwoDutiesInput.val().trim(),
    };
    console.log(userData);

    storeJobInput(userData.jobOneTitle, userData.employerOne, userData.employmentOneDates, userData.responsibilitiesOne, userData.jobTwoTitle, userData.employerTwo, userData.employmentTwoDates, userData.responsibilitiesTwo);
  });

  function storeJobInput(jobOneTitle, employerOne, employmentOneDates, responsibilitiesOne, jobTwoTitle, employerTwo, employmentTwoDates, responsibilitiesTwo) {
    $.post("/api/jobhistory", {
      jobOneTitle: jobOneTitle,
      employerOne: employerOne,
      employmentOneDates: employmentOneDates,
      responsibilitiesOne: responsibilitiesOne,
      jobTwoTitle: jobTwoTitle,
      employerTwo: employerTwo,
      employmentTwoDates: employmentTwoDates,
      responsibilitiesTwo: responsibilitiesTwo,
    })
      .then(() => {
        window.location.replace("/members");
      })
  }
  $.get("/api/jobhistory").then(jobHist => {
    $("#jtitleOne").text(`${jobHist[0].jobOneTitle}`);
    $("#datesOne").text(`${jobHist[0].employmentOneDates}`);
    $("#employOne").text(`${jobHist[0].employerOne}`);
    $("#jDutiesOne").text(`${jobHist[0].responsibilitiesOne}`);
    $("#jtitleTwo").text(`${jobHist[0].jobTwoTitle}`);
    $("#datesTwo").text(`${jobHist[0].employmentTwoDates}`);
    $("#employTwo").text(`${jobHist[0].employerTwo}`);
    $("#jDutiesTwo").text(`${jobHist[0].responsibilitiesTwo}`);
    console.log(jobHist[0]);
  })

});



