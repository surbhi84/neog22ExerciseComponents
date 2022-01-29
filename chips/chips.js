let parentDiv = document.querySelector(".parent-div");
let input = document.querySelector(".input-field");
let chips = document.querySelectorAll(".chip");
let cancel = document.querySelectorAll(".icon");

function createElem(element, classname, parent) {
  let tempElem = document.createElement(element);
  tempElem.className = classname;

  if (parent) {
    parent.appendChild(tempElem);
  }
  return tempElem;
}

input.addEventListener("change", () => {
  let chip = createElem("div", "chip", parentDiv);
  chip.textContent = `${input.value}`;
  let cross = createElem("div", "icon", chip);
  let icon = createElem("i", "fa fa-times", cross);
  cross.addEventListener(
    "click",
    () => {
      chip.remove();
    },
    { once: true }
  );
  input.value = "";
});

// console.log(cancel);
// cancel.forEach((a) => {
//   a.addEventListener("click", () => {
//     a.parentElement.style.display = "none";
//   });
// });

cancel.forEach((a, i) => {
  a.addEventListener(
    "click",
    () => {
      removeChip(i);
    },
    { once: true }
  );
});

function removeChip(i) {
  chips[i].remove();
}
