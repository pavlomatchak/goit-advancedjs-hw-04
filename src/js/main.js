import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './api';

const gallery = document.querySelector('.gallery');
const form = document.getElementById('search-form');
const loadMore = document.querySelector('.load-more');
let page = 1;
let totalPages = 0;
let query = '';
let images = '';

function onSubmit() {
  fetchImages(query, page)
  .then(({ data }) => {
    totalPages = Math.ceil(data.totalHits / 100);

    if (data.totalHits === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
        timeout: 15000,
      });

      return;
    }

    if (totalPages > 1) {
      loadMore.style.display = 'block';
    }

    for (const item of data.hits) {
      images += `
        <div class="photo-card">
          <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${item.likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${item.views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${item.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${item.downloads}
            </p>
          </div>
        </div>
      `;
    }

    gallery.innerHTML = images;

    if (page === totalPages) {
      loadMore.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: '"We\'re sorry, but you\'ve reached the end of search results."',
        position: 'topRight',
        timeout: 15000,
      });
    }
  })
  .catch(() => {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong',
      position: 'topRight',
      timeout: 15000,
    });
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';
  images = '';
  query = form.elements.searchQuery?.value;
  page = 1;
  loadMore.style.display = 'none';

  if (query.length === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Search field is empty',
      position: 'topRight',
      timeout: 15000,
    });

    return;
  }

  onSubmit();
});

loadMore?.addEventListener('click', () => {
  if (page < totalPages) {
    page += 1;
    onSubmit();
  }
});
