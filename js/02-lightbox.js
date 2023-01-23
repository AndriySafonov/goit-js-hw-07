import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");
const renderGalleryItems = (pictures) =>
  pictures.reduce(
    (acc, picture) =>
      acc +
      `<a class="gallery__item" href=${picture.original}>
      <img class="gallery__image" src=${picture.preview} alt=${picture.description} />
    </a>
    `,
    ""
  );

const insertGalleryItems = (string) => {
  
  gallery.insertAdjacentHTML("beforeend", string);
};
insertGalleryItems(renderGalleryItems(galleryItems));

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
  });
}
console.log(galleryItems);

