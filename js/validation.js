const nama = document.getElementById("nama-lengkap");
const alamat = document.getElementById("alamat");
const telepon = document.getElementById("no-telepon");
const nama2 = document.getElementById("nama-lengkap2");
const alamat2 = document.getElementById("alamat2");
const telepon2 = document.getElementById("no-telepon2");
const berat = document.getElementById("berat-barang");
const barang = document.getElementById("tipe-barang");
const layanan = document.getElementById("tipe-layanan");
const metode = document.getElementById("metode");

const linkElement = document.querySelector('a[href="#"]');
const btnsend = document.getElementById("btnsend");

const notiferror = document.getElementById("notiferror");

btnsend.addEventListener("click", function (event) {
  if (
    nama.value === "" ||
    alamat.value === "" ||
    telepon.value === "" ||
    nama2.value === "" ||
    alamat2.value === "" ||
    telepon2.value === "" ||
    berat.value === "" ||
    barang.value === "" ||
    layanan.value === "" ||
    metode.value === ""
  ) {
    notiferror.style.display = "block";
    notiferror.style.opacity = 1;
    event.preventDefault();

    setTimeout(function () {
      notiferror.style.opacity = 0;
      setTimeout(function () {
        notiferror.style.display = "none";
      }, 500);
    }, 9000);
  } else {
    notiferror.style.display = "none";
    linkElement.href = "#popup";
  }
});
