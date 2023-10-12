const nama = document.getElementById("nama");
const email = document.getElementById("email");
const username = document.getElementById("text");
const password = document.getElementById("password");

const linkElement = document.getElementById("toLogin");
const btnregis = document.getElementById("btnregis");

const notiferror = document.getElementById("notiferror");

btnregis.addEventListener("click", function (event) {
  if (username.value === "" || password.value === "") {
    notiferror.style.display = "block";
    notiferror.style.opacity = 1;
    event.preventDefault();

    setTimeout(function () {
      notiferror.style.opacity = 0;
      setTimeout(function () {
        notiferror.style.display = "none";
      }, 500);
    }, 5000);
  } else {
    notiferror.style.display = "none";
    linkElement.href = "/Pages/login.html";
  }
});
