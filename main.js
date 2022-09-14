let delt_btn = document.querySelectorAll(".del");

delt_btn.forEach((e) => {
  e.addEventListener("click", handelclik);
});
function handelclik(even) {
  let del = even.target;
  // console.log(del);
  del.parentElement.parentElement.remove();
  update();
  handelchange();
}
let quute = document.querySelectorAll("input");
quute.forEach((el) => {
  el.addEventListener("change", handelchange);
});
function handelchange() {
  update();
}

function update() {
  let card = document.querySelectorAll(".card");

  let globale = 0;
  card.forEach((ele) => {
    let totale = 0;
    let price = ele.querySelector(".price").innerText;

    let quntite = ele.querySelector("input").value;
    totale += parseFloat(price * quntite);

    ele.querySelector(".totale_price").innerText = totale;

    globale += totale;
    document.querySelector(".global_price").innerText = globale;
  });
}

let selected = document.querySelectorAll(".selected");
selected.forEach((elem) => {
  elem.addEventListener("click", handel);
});

function handel(elem) {
  elem.target;
  // console.log(elem.target);
  // elem.target.parentElement.classlist;
  if (elem.target.parentElement.parentElement.classList.contains("active")) {
    elem.target.parentElement.parentElement.classList.remove("active");
  } else elem.target.parentElement.parentElement.classList.add("active");
}
