const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

gallery.style.display = "block";

gallery.style.gap = "10px";
// gallery.style.marginLeft = "auto";
// gallery.style.marginRight = "auto";

const markup = images
  .map(
    ({ url, alt }) =>
      `<li style="width: 200px"><img src=${url} alt=${alt} style="width: 100%"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
