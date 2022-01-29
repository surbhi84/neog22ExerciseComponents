console.log("js");

let hideBtn = document.querySelector(".btn1");
let badge = document.querySelector(".badge3");
let bool = true;

function setBool(a) {
  bool = a;
}

hideBtn.addEventListener("click", () => {
  bool === true
    ? ((badge.style.display = "none"), setBool(false))
    : ((badge.style.display = ""), setBool(true));

  //   if (bool === true) {
  //     badge.style.display = "none";
  //     setBool(false);
  //   } else {
  //     badge.style.display = "block";
  //     setBool(true);
  //   }
});
