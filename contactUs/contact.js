// Below are the variables that are using document.getElementById to grab the id's from the html file
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");

// Below listens for the click of the submit Button. Once it hears it, it will activate the arrow function
form.addEventListener("submit", (e) => {
  // e.preventDefault will prevent the form from submitting if the wrong input is entered.
  e.preventDefault();

  // validateInputs validates the content that's entered in the input box
  validateInputs();
});

// Below is a variable called setError which is equal to an arrow function that displays an error message to the error class in the html.
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// Below is a variable called setSuccess which is equal to an arrow function that allows you to submit the content you've provided. This removes the error message that would otherwise be placed if you entered the wrong information inside the text box.
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// The variable below uses a regex to make sure that the user inputs the correct email strcuture before submitting the form.
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// The variable below removes the white space of the input boxes full name and email once the user enters the data.
const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();

  // If the input box full name is empty when the user attempts to submit the form then the form will notify them to fill that part in. Otherwise it will except the users input.
  if (fullnameValue === "") {
    setError(fullname, "Please enter your Fullname");
  } else {
    setSuccess(fullname);
  }

  // If the input box email is empty when the user attempts to submit the form then the form will notify them to fill that part in. Otherwise it will except the users input.
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
};
