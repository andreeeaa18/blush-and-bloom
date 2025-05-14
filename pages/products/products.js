import { htmlTemplate, products } from "./common.js";

const cartCounter = document.getElementById("cart-counter");
const addToCartBtn = document.getElementsByClassName("buy-btn-prod");
const dressBtn = document.getElementById("dress-btn");
const earringsBtn = document.getElementById("earrings-btn");
const shoesBtn = document.getElementById("shoes-btn");
const bagBtn = document.getElementById("bag-btn");
const corsetBtn = document.getElementById("corset-btn");
const cartBtns = document.querySelectorAll(".cart-link");
const displayedCartDiv = document.querySelector(".cart-div");

let localSaved;
let showCart = false;

const attachCartButtonListeners = () => {
  Array.from(addToCartBtn).forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      getProducts();
      showCart = true;
      cartBtns[0]?.click();

      cartCounter.textContent = localSaved.count;
      // cartCounter.style.display = "flex";

      const productContainer = button.parentElement;

      const productName = productContainer.querySelector(
        ".products-styling-title"
      ).textContent;
      const productPrice = productContainer.querySelector(
        ".products-styling-price"
      ).textContent;

      // const productContainer = button.closest(".item");

      // const productName = productContainer.querySelector(
      //   ".products-styling-title"
      // ).textContent;
      // const productPrice = productContainer.querySelector(
      //   ".products-styling-price"
      // ).textContent;

      localStorage.setItem(
        "products",
        JSON.stringify({
          products: [
            ...localSaved.products,
            {
              name: productName,
              price: productPrice,
              index: Math.random() * 100,
            },
          ],
          count: localSaved.count + 1,
        })
      );
      cartCounter.textContent = localSaved.count + 1;
    });
  });
};

const renderProducts = (localProducts) => {
  document.querySelector(".products").innerHTML = "";
  localProducts.forEach((item) => {
    const randomEl = Math.floor(Math.random() * 5);
    const currentTemplate = htmlTemplate[randomEl];

    const parser = new DOMParser();
    const doc = parser.parseFromString(currentTemplate, "text/html");

    const firstDiv = doc.querySelector(".item");
    if (firstDiv) firstDiv.id = item.linkId;
    const img = doc.querySelector(".photo");
    const title = doc.querySelector(".products-styling-title");
    const description = doc.querySelector(".text");
    const price = doc.querySelector(".products-styling-price");

    if (img) img.src = item.src;
    if (title) title.textContent = item.title;
    if (description) description.textContent = item.description;
    if (price) price.textContent = `$${item.price}`;
    document.querySelector(".products").innerHTML += doc.body.innerHTML;
  });
  attachCartButtonListeners();
};
renderProducts(products);

const getProducts = () => {
  localSaved = JSON.parse(localStorage.getItem("products")) || {
    products: [],
    count: 0,
  };
};
getProducts();

document.querySelector(".menu-toggle").addEventListener("click", () => {
  displayedCartDiv.style.display = "none";
});

const deleteFunc = (index) => {
  console.log("clicked");

  const filtered = localSaved.products.filter(
    (item) => item.index !== parseFloat(index)
  );
  localStorage.setItem(
    "products",
    JSON.stringify({
      products: filtered,
      count: filtered.length,
    })
  );
  getProducts();
  renderWishlist();
  // showCart = false;
  // cartBtns[0]?.click();

  cartCounter.textContent = localSaved.count;
};
window.deleteFunc = deleteFunc;

const renderWishlist = () => {
  if (localSaved.products.length === 0) {
    displayedCartDiv.innerHTML = "<p id='empty-cart'>Coșul este gol!</p>";
  } else
    displayedCartDiv.innerHTML = localSaved.products
      .map((product) => {
        return `
          <div class="cart-item">
            <p>${
              product.name.length > 12
                ? product.name.slice(0, 12) + "..."
                : product.name
            }</p>
            <p>${product.price}</p>
            <button onclick="deleteFunc(${
              product.index
            })" class="delete-btn" data-index="${product.index}">
            <img src="https://cdn2.iconfinder.com/data/icons/multimedia-collection-13/128/200211-22-512.png"
               alt="delete-icon"
               style="width: 13px; height: 13px" />
            </button>
          </div>
          `;
      })
      .join("");

  // const deleteButtons = displayedCartDiv.querySelectorAll(".delete-btn");
  // deleteButtons.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     console.log("Delete button clicked");
  //     const index = btn.getAttribute("data-index");
  //     deleteFunc(index);
  //   });
  // });

  const totalSum = localSaved.products.reduce((sum, product) => {
    const price = parseFloat(product.price.replace("$", ""));
    return sum + price;
  }, 0);

  if (localSaved.products.length !== 0) {
    displayedCartDiv.innerHTML += `
  <p id="total-price">Suma totală: ${totalSum}$</p>
  <button class="purchase-btn">Cumpără</button>
`;
  }

  const purchaseBtn = displayedCartDiv.querySelector(".purchase-btn");
  if (purchaseBtn) {
    purchaseBtn.addEventListener("click", () => {
      alert("Îți mulțumim pentru cumpărătură!");
      localStorage.removeItem("products");
      displayedCartDiv.innerHTML = "";
      displayedCartDiv.style.display = "none";
      cartCounter.textContent = "0";
    });
  }
};

cartCounter.textContent = localSaved.count;
// cartCounter.style.display = "none";

cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", () => {
    getProducts();

    showCart = !showCart;

    if (showCart) {
      if (localSaved.products.length === 0) {
        displayedCartDiv.style.display = "flex";
        displayedCartDiv.innerHTML = "<p id='empty-cart'>Coșul este gol!</p>";
      } else {
        displayedCartDiv.style.display = "flex";
        renderWishlist();

        //   const totalSum = localSaved.products.reduce((sum, product) => {
        //     const price = parseFloat(product.price.replace("$", ""));
        //     return sum + price;
        //   }, 0);

        //   displayedCartDiv.innerHTML += `
        //   <p id="total-price">Suma totală: ${totalSum}$</p>
        //   <button class="purchase-btn">Cumpără</button>
        // `;
      }

      // const purchaseBtn = displayedCartDiv.querySelector(".purchase-btn");
      // purchaseBtn.addEventListener("click", () => {
      //   alert("Îți mulțumim pentru cumpărătură!");
      //   localStorage.removeItem("products");
      //   displayedCartDiv.innerHTML = "";
      //   displayedCartDiv.style.display = "none";
      //   cartCounter.textContent = "0";
      //   // cartCounter.style.display = "none";
      // });
    } else {
      displayedCartDiv.innerHTML = "";
      displayedCartDiv.style.display = "none";
    }
  });
});

const sortBtn = document.querySelector("#sort-btn");
const sortDiv = document.querySelector("#sort-div");
const sortAlpha = document.getElementById("sort-alpha");
const sortLowPrice = document.getElementById("sort-low-price");
const sortHighPrice = document.getElementById("sort-high-price");
const filterInput = document.getElementById("filter-input");

let showSort = false;
sortBtn.addEventListener("click", () => {
  filterInput.value = "";
  showSort = !showSort;
  if (showSort) {
    sortDiv.style.display = "flex";
  } else {
    sortDiv.style.display = "none";
  }
});

sortAlpha.addEventListener("click", () => {
  console.log("a");

  const sortedAlphaProducts = products.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  renderProducts(sortedAlphaProducts);
});

sortLowPrice.addEventListener("click", () => {
  const sortedLowPrice = products.sort((a, b) => {
    return a.price - b.price;
  });
  renderProducts(sortedLowPrice);
});

sortHighPrice.addEventListener("click", () => {
  const sortedHighPrice = products.sort((a, b) => {
    return b.price - a.price;
  });
  renderProducts(sortedHighPrice);
});

filterInput.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  renderProducts(filteredProducts);
});
