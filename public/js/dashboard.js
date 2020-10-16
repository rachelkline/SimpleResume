$(document).ready(() => {
  // Getting references to our form and input
  const editJob = $("#finishJobBtn");
  const jobOneTitleInput = $("input#job1-title");
  const employmentOneDatesInput = $("input#employment1-dates");
  const employerOneInput = $("input#employer1");
  const jobOneDutiesInput = $("input#job1-duties");
  const jobTwoTitleInput = $("input#job2-title");
  const employmentTwoDatesInput = $("input#employment2-dates");
  const employerTwoInput = $("input#employer2");
  const jobTwoDutiesInput = $("input#job2-duties");

  // When the signup button is clicked, we validate the email and password are not blank
  editJob.on("click", event => {
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

    // If we have an email and password, run the signUpUser function
    storeJobInput(userData.jobOneTitle, userData.employerOne, userData.employmentOneDates, userData.responsibilitiesOne, userData.jobTwoTitle, userData.employerTwo, userData.employmentTwoDates, userData.responsibilitiesTwo);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
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
        //   // If there's an error, handle it by throwing up a bootstrap alert
      })
  }


  const editResume = $("#finishBtn");
  const soughtJob = $("input#sought-prof");
  const professionalSummary = $("input#prof-summary");
  const education = $("input#education-input");
  const relevantSkills1 = $("input#relevant-skill1");
  const relevantSkills2 = $("input#relevant-skill2");
  const relevantSkills3 = $("input#relevant-skill3");
 

  // When the signup button is clicked, we validate the email and password are not blank
  editResume.on("click", event => {
    event.preventDefault();
    const userData = {
      jobSeeking: soughtJob.val().trim(),
      professionalSummary: professionalSummary.val().trim(),
      education: education.val().trim(),
      relevantSkills1: relevantSkills1.val().trim(),
      relevantSkills2: relevantSkills2.val().trim(),
      relevantSkills3: relevantSkills3.val().trim(),
    };
    console.log(userData);

    // If we have an email and password, run the signUpUser function
    storeResumeInput(userData.jobSeeking, userData.professionalSummary, userData.education, userData.relevantSkills1, userData.relevantSkills2, userData.relevantSkills3);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function storeResumeInput(jobSeeking, professionalSummary, education, relevantSkills1, relevantSkills2, relevantSkills3) {
    $.post("/api/resume", {
      jobSeeking: jobSeeking,
      professionalSummary: professionalSummary,
      education: education,
      relevantSkills1: relevantSkills1,
      relevantSkills2: relevantSkills2,
      relevantSkills3: relevantSkills3
    })
      .then(() => {
        window.location.replace("/members");
        //   // If there's an error, handle it by throwing up a bootstrap alert
      })
  }

});
