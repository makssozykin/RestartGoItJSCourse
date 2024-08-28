import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");
listGallery.addEventListener("click", handleClick);

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      target="_parent"
    />
  </a>
</li>`,
  ""
);

listGallery.insertAdjacentHTML("beforeend", markup);

function handleClick(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">`
    );
    instance.show();
    document.body.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}
