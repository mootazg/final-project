function changeReadMore() {
  const mycontent = document.getElementById("mybox1id");
  const mybutton = document.getElementById("mybuttonid");

  if (mycontent.style.display === "none" || mycontent.style.display === "") {
    mycontent.style.display = "block";
    mybutton.textContent = "Read Less";
  } else {
    mycontent.style.display = "none";
    mybutton.textContent = "Read More";
  }
}

console.log(document.bookForm.numberOfPeople.value);
function validateForm(e) {
  //   e.preventDefault();
  document.getElementById("total-price").innerHTML =
    document.bookForm.numberOfPeople.value * document.bookForm.place.value;
  console.log(
    document.bookForm.numberOfPeople.value * document.bookForm.place.value
  );
}
var england = document.getElementById("eng");
var france = document.getElementById("frn");
var tunisie = document.getElementById("tun");
var italy = document.getElementById("ital");
var japan = document.getElementById("jap");
var us = document.getElementById("usa");
var select = document.querySelector("select");
england.addEventListener("click", () => {
  select.value = "2300";
});
france.addEventListener("click", () => {
  select.value = "1400";
});
tunisie.addEventListener("click", () => {
  select.value = "1000";
});
italy.addEventListener("click", () => {
  select.value = "1500";
});
japan.addEventListener("click", () => {
  select.value = "3000";
});
us.addEventListener("click", () => {
  select.value = "2000";
});
