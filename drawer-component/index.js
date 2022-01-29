let menuBtn = document.querySelector(".icon");
let drawer = document.querySelector(".drawer-parent");

let bool = true;
menuBtn.addEventListener("click", viewDrawer);

function viewDrawer() {
  bool
    ? (drawer.classList.add("out-view"),
      drawer.classList.remove("in-view"),
      (bool = false))
    : (drawer.classList.remove("out-view"),
      drawer.classList.add("in-view"),
      (bool = true));
}
