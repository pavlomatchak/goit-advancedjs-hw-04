export function appendImages(images) {
  const gallery = document.querySelector('.gallery');
  let content = '';

  images.forEach(image => {
    content += `
      <div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${image.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${image.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${image.downloads}
          </p>
        </div>
      </div>
    `;
  });

  gallery.insertAdjacentHTML('beforeend', content);
}
