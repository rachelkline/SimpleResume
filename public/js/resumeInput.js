$(document).ready(() => {
    // Getting references to our inputs
    const myInformation = $("div#Information");
    const professionalSummaryInput = $("input#prof-summary");
    const educationInput = $("input#education-input");
    const skillInput1 = $("input#relevant-skill1");
    const skillInput2 = $("input#relevant-skill2");
    const skillInput3 = $("input#relevant-skill3");

    myInformation.on("#finishBtn", event => {
        event.preventDefault();
        const userData = {
            professionalSummary: professionalSummaryInput.val().trim(),
            education: educationInput.val().trim(),
            relevantSkills1: skillInput1.val().trim(),
            relevantSkills2: skillInput2.val().trim(),
            relevantSkills3: skillInput3.val().trim()
        };
        console.log(userData);

        if (!userData.professionalSummary || !userData.education || !userData.relevantSkills1 || !userData.relevantSkills2) {
            return;
        }

        addUserInfo(userData.professionalSummary, userData.education, userData.relevantSkills1, userData.relevantSkills2, userData.relevantSkills3);
        professionalSummaryInput.val("");
        educationInput.val("");
        skillInput1.val("");
        skillInput2.val("");
        skillInput3.val("");

        function addUserInfo() {
            const data = [];
            const resume = {
                url: "/api/Resume",
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                },
            };
            data.push(resume)
            $.ajax(resume).done(function (response) {
                console.log(response);
            });
        }
    });

});




// /* global moment */

// // When user clicks add-btn
// $("#chirp-submit").on("click", function(event) {
//     event.preventDefault();

//     // Make a newChirp object
//     var newChirp = {
//       author: $("#author").val().trim(),
//       body: $("#chirp-box").val().trim(),
//     };

//     console.log(newChirp);

//     // Send an AJAX POST-request with jQuery
//     $.post("/api/new", newChirp)
//       // On success, run the following code
//       .then(function() {

//         var row = $("<div>");
//         row.addClass("chirp");

//         row.append("<p>" + newChirp.author + " chirped: </p>");
//         row.append("<p>" + newChirp.body + "</p>");
//         row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

//         $("#chirp-area").prepend(row);

//       });

//     // Empty each input box by replacing the value with an empty string
//     $("#author").val("");
//     $("#chirp-box").val("");
//   });

//   // When the page loads, grab all of our chirps
//   $.get("/api/all", function(data) {

//     if (data.length !== 0) {

//       for (var i = 0; i < data.length; i++) {

//         var row = $("<div>");
//         row.addClass("chirp");

//         row.append("<p>" + data[i].author + " chirped.. </p>");
//         row.append("<p>" + data[i].body + "</p>");
//         row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//         $("#chirp-area").prepend(row);

//       }

//     }

//   });
