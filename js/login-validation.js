const username = document.getElementById("text");
const password = document.getElementById("password");

const linkElement = document.getElementById("toindex");
const btnlogin = document.getElementById("btnlogin");

const notiferror = document.getElementById("notiferror");
const notifwrong = document.getElementById("notifwrong");

btnlogin.addEventListener("click", function (event) {
  if (username.value === "" || password.value === "") {
    notiferror.style.display = "block";
    notifwrong.style.display = "none";
    notiferror.style.opacity = 1;
    event.preventDefault();

    setTimeout(function () {
      notiferror.style.opacity = 0;
      setTimeout(function () {
        notiferror.style.display = "none";
      }, 500);
    }, 5000);
  } else if (username.value === "admin" || password.value === "admin") {
    notiferror.style.display = "none";
    notifwrong.style.display = "none";
    linkElement.href = "/Pages/adm-index.html";
  } else {
    notiferror.style.display = "none";
    notifwrong.style.display = "none";
    linkElement.href = "/Pages/index1.html";
  }
});
