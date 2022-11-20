import { galleryItems } from "./gallery-items.js";
{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */
}
const imageGallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`
  )
  .join(``);

imageGallery.insertAdjacentHTML(`beforeend`, markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: `250`,
});
