const menu = document.querySelector('#horizontalMenu');
const items = document.querySelectorAll('.menu__item-product');

const getItemWidth = (item) => {
  let resultWidth = 524;

  return resultWidth;
}

const setItemWidth = (item, width) => {
  const itemContent = item.nextElementSibling;
  const itemText = item.firstElementChild;
  itemContent.style.width = `${width}px`;
  itemText.style.width = `${width}px`;
}

const closeItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.remove('menu__item-product--active');
  item.classList.remove('menu__button--active');
  setItemWidth(item, 0);
}

const openItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.add('menu__item-product--active');
  item.classList.add('menu__button--active');

  const width = getItemWidth(item);
  setItemWidth(item, width);

}

menu.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;
  const isActive = target.classList.contains('menu__button--active');
  const activeElement = document.querySelector('menu__item-product--active');

  if (target.classList.contains('menu__button') && isActive) {
    // всё закрываем
    if (activeElement) {
      closeItem(activeElement);
    }
  }
  if (target.classList.contains('menu__button') && !isActive) {
    if (activeElement) {
      closeItem(activeElement);
    }
    // всё закрываем
    // открываем нужную 
    openItem(target);
  }

})