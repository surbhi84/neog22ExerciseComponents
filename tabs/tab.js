let tabs = document.querySelectorAll("[data-tab-target]");
let tabContent = document.querySelectorAll("[data-tab-content]");

let cardTab = document.querySelectorAll("[data-card-tab]");
let cardContent = document.querySelectorAll("[data-card-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

cardTab.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.cardTab);
    cardContent.forEach((content) => {
      content.classList.remove("active");
    });
    cardTab.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    console.log("hey");
    target.classList.add("active");
  });
});

let wish = document.querySelectorAll(".wish");
let wishlist = document.querySelector("#wishlist");
let icon = document.querySelectorAll(".icon");
let cart = document.querySelector("#cart");

wish.forEach((icon) => {
  icon.addEventListener("click", () => {
    let cartIcon = document.createElement("i");
    cartIcon.className = "fas fa-shopping-cart";
    let div = icon.parentElement;
    if (icon.parentElement == cart) {
      div.appendChild(cartIcon);
    }
    wishlist.appendChild(div);
  });
});

icon.forEach((icon) => {
  icon.addEventListener("click", () => {
    let buy = document.createElement("span");
    buy.textContent = `Buy`;
    buy.className = "buy";
    let div = icon.parentElement;
    div.appendChild(buy);
    cart.appendChild(div);
    icon.remove();
  });
});

let tabs1 = document.querySelectorAll(".tab");

tabs1.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth",
    });
  });
});
