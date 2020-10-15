
const submitHistory = () => {
    const data = []
    var settings = {
        "url": "/api/jobhistory",
        "method": "POST",
        "data": { "jobTitleOne": "Line Cook", "employerNameOne": "Paninis", "locationOne": "Kent, OH", "employmentDatesOne": "01/01/2020", "responsibilitiesOne": "Cook", "jobTitleTwo": "Line Cook", "employerNameTwo": $("#job2-employer").val(), "locationTwo": "Kent, OH", "employmentDatesTwo": "01/01/2020", "responsibilitiesTwo": $("#job2-duties").val() },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

// When the user clicks on the submit button for the job information.
$("#finishJobBtn").click(() => {
    alert("Submitting")
    submitHistory()
})