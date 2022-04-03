const buttons = document.querySelectorAll(".team__name");


  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];


    button.addEventListener('click', function (event) {
      event.preventDefault();
      const target = event.target;
      console.log('target', target);
      const description = target.nextElementSibling;
      console.log('description', description);
      if (description.classList.contains('team__desc--active')) {
        description.classList.remove('team__desc--active');
      } else {
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          const description = button.nextElementSibling;
          description.classList.remove('team__desc--active');
        }
        description.classList.add('team__desc--active');
      }
    });
  }