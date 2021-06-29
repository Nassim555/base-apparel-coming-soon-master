const form = document.querySelector(".news-letter");
const email = document.querySelector(".email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    error(email, "Email cannot be empty.");
  } else if (!isEmail(emailValue)) {
    error(email, "Please enter a valid email address.");
    console.log("ssd");
  } else {
    success(email, "Email is sent!");
  }
}
function error(input, message) {
  const inputParent = email.parentElement;
  const errorMassege = inputParent.querySelector(".message");
  errorMassege.innerHTML = message;
  inputParent.classList.add("error");
  inputParent.classList.remove("success");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

function success(input, message) {
  const inputParent = email.parentElement;
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
  const successMassege = inputParent.querySelector(".message");
  successMassege.innerHTML = message;
}
