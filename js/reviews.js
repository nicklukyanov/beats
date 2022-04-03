const reviewAvatars = document.querySelector('#reviewAvatars');

const findReview = (id) => {
  const activeReview = document.querySelector('.reviews__display-inner--active');
  activeReview.classList.remove('reviews__display-inner--active');
  let currentItem = document.querySelector(`.reviews__display-inner[data-item="${id}"]`);

  currentItem.classList.add('reviews__display-inner--active');
}


reviewAvatars.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('interactive-avatar__img')) {
    const activeListItem = document.querySelector('.interactive-avatar--active');
    if (activeListItem) {
      activeListItem.classList.remove('interactive-avatar--active');
    }
    const button = target.parentElement;
    const ListElement = button.parentElement;
    const id = button.getAttribute('data-open');
    ListElement.classList.add('interactive-avatar--active');
    findReview(id);
  }
});

