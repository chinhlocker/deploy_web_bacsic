var btnClickMe = document.getElementById("btnClickMe");
var helloText = document.getElementById("helloText");

btnClickMe.onclick = function () {
  helloText.innerText = "Hello toi ten la Phuong";
};

var btnChangeName = document.getElementById("btnChangeName");
var nameDisplay = document.getElementById("nameDisplay");
var daDoiTen = false;

btnChangeName.onclick = function () {
  if (daDoiTen == false) {
    nameDisplay.innerText = "Minh Chính";
    daDoiTen = true;
  } else {
    nameDisplay.innerText = "Phương";
    daDoiTen = false;
  }
};

var toggleModal = document.getElementById("toggleModal");
var closeModal = document.getElementById("closeModal");
var myModal = document.getElementById("myModal");

toggleModal.onclick = function () {
  myModal.style.display = "flex";
};

closeModal.onclick = function () {
  myModal.style.display = "none";
};

myModal.onclick = function (event) {
  if (event.target === myModal) {
    myModal.style.display = "none";
  }
};