document.addEventListener('DOMContentLoaded', function () {
  // MOBILE MENU
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // VIDEO MODAL
  const modal = document.querySelector('#videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.querySelector('#videoPlayer');

  // OPEN MODAL WHEN CLICK
  videoButton.addEventListener('click', function () {
    modal.style.display = 'block';

    videoPlayer.src =
      'https://www.youtube.com/embed/jZHhwwAYYsc?si=_mD0rmUfBIIK84tl';

    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });

    window.addEventListener('click', function (e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
});

// NAVIGATION BACKGROUND ON SCROLL
window.addEventListener('scroll', function () {
  const navbar = this.document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
