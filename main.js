const stok = document.getElementById('stock').value,
  stokMin = 1,
  qty = document.getElementById('qty'),
  printStock = document.getElementById('')
  buttonMin = document.getElementById('min'),
  buttonPlus = document.getElementById('plus')

function btnMin() {
  qty.value = (qty.value > stokMin) ? --qty.value : stokMin;
  if (qty.value == stokMin) {
    buttonMin.disabled = true;
  }
    buttonPlus.disabled = false;
}

function btnPlus() {
  console.log(stok);
  qty.value = (qty.value << stok) ? ++qty.value : stok;
  if (qty.value == stok) {
    buttonPlus.disabled = true;
  }
    buttonMin.disabled = false;
}


$('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });

    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });