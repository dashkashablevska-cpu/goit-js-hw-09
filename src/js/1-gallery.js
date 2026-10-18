import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Заміни цей масив на свій масив images із попереднього домашнього завдання
const images = [
  {
    preview: 'https://picsum.photos/id/1015/360/200',
    original: 'https://picsum.photos/id/1015/1280/854',
    description: 'River between mountains',
  },
  {
    preview: 'https://picsum.photos/id/1016/360/200',
    original: 'https://picsum.photos/id/1016/1280/854',
    description: 'Canyon landscape',
  },
  {
    preview: 'https://picsum.photos/id/1018/360/200',
    original: 'https://picsum.photos/id/1018/1280/854',
    description: 'Mountain meadow',
  },
  {
    preview: 'https://picsum.photos/id/1019/360/200',
    original: 'https://picsum.photos/id/1019/1280/854',
    description: 'Rocky coast',
  },
  {
    preview: 'https://picsum.photos/id/1020/360/200',
    original: 'https://picsum.photos/id/1020/1280/854',
    description: 'Bear in the water',
  },
  {
    preview: 'https://picsum.photos/id/1021/360/200',
    original: 'https://picsum.photos/id/1021/1280/854',
    description: 'Foggy hills',
  },
  {
    preview: 'https://picsum.photos/id/1022/360/200',
    original: 'https://picsum.photos/id/1022/1280/854',
    description: 'Mountain lake',
  },
  {
    preview: 'https://picsum.photos/id/1024/360/200',
    original: 'https://picsum.photos/id/1024/1280/854',
    description: 'Eagle portrait',
  },
  {
    preview: 'https://picsum.photos/id/1025/360/200',
    original: 'https://picsum.photos/id/1025/1280/854',
    description: 'Pug dog',
  },
];

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}

gallery.innerHTML = createGalleryMarkup(images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
