document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".notification-carousel", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<b></b>'  + '</span>';
        },
    },
  });
  const tabSelectors = document.querySelectorAll('[data-tabs]');

  for (const [i, tabs] of [...tabSelectors].entries()) {
      tabs.setAttribute(`data-tabs-${i}`, '');
      new Tabby(`[data-tabs-${i}]`);
  }
});
// JQ FUNCTIONS
$(document).ready(function () {
  $(".notification-block .close-icon").click(function () {
    $(".notification-block").addClass("unactive");
  });
});