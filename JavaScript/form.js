const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameValidate();
  validarTelefone();
  emailValidate();
  mainPasswordValidate();
  comparePassword();
});

function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  spans[index].style.display = "flex";
}
function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}
function validarTelefone() {
  var regex = /^\d{11}$/;

  if (regex.test(campos[1].value)) {
    removeError(1);
  } else {
    setError(1);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2);
  } else {
    removeError(2);
  }
}
