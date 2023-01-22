import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const renderItems = (pictures) =>
//   pictures
//     .map(
//       (picture) => `<div class="gallery__item">
//     <a class="gallery__link" href="large-image.jpg">
//       <img
//         class="gallery__image"
//         src="small-image.jpg"
//         data-source="large-image.jpg"
//         alt="Image description"
//       />
//     </a>
//   </div>`
//     )
//     .join("");
console.log();
const renderGalleryItems = (pictures) =>
  pictures.reduce(
    (acc, picture) =>
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image"
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt=${galleryItems.description}
    />
  </a>
</div>`,
    ""
  );
  console.log(galleryItems.original);
console.log(renderGalleryItems(galleryItems));

const insertGalleryItems = (string) => {
  const gallery = document.querySelector(".gallery");
  gallery.insertAdjacentHTML("beforeend", string);
};

insertGalleryItems(renderGalleryItems(galleryItems));

