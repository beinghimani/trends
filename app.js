const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Dress",
    price: 119,
    colors: [
      {
        code: "red",
        img: "./img/n1.jpeg",
      },
      {
        code: "black",
        img: "./img/n2.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Short Dress",
    price: 149,
    colors: [
      {
        code: "white",
        img: "./img/n3.jpeg",
      },
      {
        code: "green",
        img: "./img/n4.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Long Dress",
    price: 109,
    colors: [
      {
        code: "red",
        img: "./img/n5.jpeg",
      },
      {
        code: "grey",
        img: "./img/n6.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Floral Dress",
    price: 129,
    colors: [
      {
        code: "red",
        img: "./img/n7.jpeg",
      },
      {
        code: "gray",
        img: "./img/n8.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "Prom Dress",
    price: 99,
    colors: [
      {
        code: "pink",
        img: "./img/n9.jpeg",
      },
      {
        code: "lilac",
        img: "./img/n10.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});