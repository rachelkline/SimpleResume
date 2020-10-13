$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#first-name");
  const lastNameInput = $("input#last-name");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const locationInput = $("input#location-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      location: locationInput.val().trim()
    };
    console.log(userData);

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.firstName, userData.lastName, userData.email, userData.password, userData.location);
    firstNameInput.val("");
    lastNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    locationInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, email, password, location) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      location: location
    })
      .then(() => {
        window.location.replace("/members");
      //   // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
