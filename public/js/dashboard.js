
const submitHistory = () => {
    var settings = {
        "url": "/api/jobhistory",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        }, // from handlebars file
        "data": JSON.stringify({ "jobTitle": $("text").val(), "employer": "Paninis", "location": "Kent, OH", "employmentDates": "01/01/2020", "responsibilities": "Cook" }),
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

// When the user clicks on the submit button for the job information.
$("Somebutton").click(() => {
    submitHistory({})
})