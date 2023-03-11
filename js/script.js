const inputs = Object.values(document.getElementsByTagName("input"));

inputs.forEach((element) => {
  element.addEventListener("focus", inputUpdate);
  element.addEventListener("input", inputUpdate);
});

function inputUpdate(e) {
  const isValid = e.target.validity.valid;

  if (isValid) {
    e.target.classList.remove("invalid");
    e.target.nextElementSibling.classList.add("hidden");
  } else {
    e.target.classList.add("invalid");
    e.target.nextElementSibling.classList.remove("hidden");
  }
}

const checkPsw = inputs.filter((element) => element.id === "check_psw")[0];

checkPsw.addEventListener("input", (e) => {
  let psw = inputs.filter((element) => element.id === "psw")[0].value;

  if (psw.length === 0) {
    e.target.setCustomValidity("Passwords don't match");
    return;
  }

  if (e.target.value === psw) e.target.setCustomValidity("")
  else e.target.setCustomValidity("Passwords don't match");
  inputUpdate(e);
});
