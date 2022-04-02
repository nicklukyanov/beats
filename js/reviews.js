const reviewAvatars = document.querySelector('#reviewAvatars');

const findReview = (id) => {
  const activeReview = document.querySelector('reviews__display-inner.active');
  activeReview.classList.remove('active');
  let currentItem = document.querySelector(`display-inner[data-item=${id}]`);
  currentItem.classList.add('active')
}

reviewAvatars.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('interactive-avatar__img')) {
    const activeListItem = document.querySelector('reviews__switcher-item.active');
    if (activeListItem) {
      activeListItem.classList.remove('active');
    }
    const button = target.parentElement;
    const ListElement = button.parentElement;
    const id = button.getAttribute('data-open');
    ListElement.classList.add('active');
    findReview(id);
  }
});