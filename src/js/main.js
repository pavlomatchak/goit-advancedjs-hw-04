import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './api';
import { appendImages } from './append-images';

const gallery = document.querySelector('.gallery');
const form = document.getElementById('search-form');
const loadMore = document.querySelector('.load-more');
let page = 1;
let totalPages = 0;
let query = '';

async function fetchData() {
  const { data } = await fetchImages(query, page)
  totalPages = Math.ceil(data.totalHits / 40);

  if (data.totalHits === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search query. Please try again.',
      position: 'topRight',
      timeout: 5000,
    });

    return;
  }

  if (totalPages > 1) {
    loadMore.style.display = 'block';
  }

  appendImages(data.hits);

  if (totalPages > 1 && page === totalPages) {
    loadMore.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: '"We\'re sorry, but you\'ve reached the end of search results."',
      position: 'topRight',
      timeout: 5000,
    });
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';
  query = form.elements.searchQuery?.value.trim();
  page = 1;
  loadMore.style.display = 'none';

  if (query.length === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Search field is empty',
      position: 'topRight',
      timeout: 5000,
    });

    return;
  }

  fetchData();
});

loadMore?.addEventListener('click', () => {
  if (page < totalPages) {
    page += 1;
    fetchData();
  }
});
