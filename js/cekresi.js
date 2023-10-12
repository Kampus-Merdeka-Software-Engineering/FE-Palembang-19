const imgdibuat = document.getElementById("img1");
const imgpengiriman = document.getElementById("img2");
const imgditerima = document.getElementById("img3");

const gariskiri = document.getElementById("grs1");
const gariskanan = document.getElementById("grs2");

const container2 = document.getElementById("container-2");

const resi = document.getElementById("resi");
const penerima = document.getElementById("penerima");
const notiferror = document.getElementById("notiferror");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchbar");

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const inputValue = searchInput.value;

    if (inputValue === "HRZN001") {
      imgdibuat.style.backgroundColor = "#84a98c";
      imgpengiriman.style.backgroundColor = "#84a98c";
      imgditerima.style.backgroundColor = "#84a98c";
      gariskiri.style.backgroundColor = "#84a98c";
      gariskanan.style.backgroundColor = "#84a98c";
      container2.style.display = "flex";
      resi.textContent = inputValue;
      penerima.textContent = "Fellia";
      notiferror.style.display = "none";
    } else if (inputValue === "HRZN002") {
      imgdibuat.style.backgroundColor = "#84a98c";
      gariskiri.style.backgroundColor = "#84a98c";
      imgpengiriman.style.backgroundColor = "#84a98c";
      gariskanan.style.backgroundColor = "#fff";
      imgditerima.style.backgroundColor = "#fff";
      container2.style.display = "flex";
      resi.textContent = inputValue;
      penerima.textContent = "Khowash";
      notiferror.style.display = "none";
    } else if (inputValue === "HRZN003") {
      imgdibuat.style.backgroundColor = "#84a98c";
      gariskiri.style.backgroundColor = "#fff";
      imgpengiriman.style.backgroundColor = "#fff";
      gariskanan.style.backgroundColor = "#fff";
      imgditerima.style.backgroundColor = "#fff";
      container2.style.display = "flex";
      resi.textContent = inputValue;
      penerima.textContent = "Mala";
      notiferror.style.display = "none";
    } else if (inputValue === "") {
      imgdibuat.style.backgroundColor = "#fff";
      imgpengiriman.style.backgroundColor = "#fff";
      imgditerima.style.backgroundColor = "#fff";
      gariskiri.style.backgroundColor = "#fff";
      gariskanan.style.backgroundColor = "#fff";
      container2.style.display = "none";
      notiferror.style.display = "none";
    } else {
      imgdibuat.style.backgroundColor = "#fff";
      imgpengiriman.style.backgroundColor = "#fff";
      imgditerima.style.backgroundColor = "#fff";
      gariskiri.style.backgroundColor = "#fff";
      gariskanan.style.backgroundColor = "#fff";
      container2.style.display = "none";
      notiferror.style.display = "block";
    }
  }
});
