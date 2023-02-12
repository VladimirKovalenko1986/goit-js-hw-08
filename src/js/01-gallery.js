// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function galleryCreateImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
        `;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', galleryCreateImage(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

galleryEl.addEventListener('click', onGalleryClickSlideImage);

function onGalleryClickSlideImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
}
