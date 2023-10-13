var currentURL = window.location.pathname;

if (
  currentURL.includes("/adm-index.html") ||
  currentURL.includes("/adm-order.html")
) {
  var links = document.querySelectorAll(".sidebar-link a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === currentURL) {
      links[i].classList.add("active");
    }
  }
}
