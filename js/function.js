function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}


$(document).ready(function(){
  $('.tags-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    arrows: false,
    autoplay: true
  });
  
  $('.hp-highlights').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/chevron-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/chevron-right.svg'>",
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
  ]
  });

  
  $('.hp-hotnews').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/chevron-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/chevron-right.svg'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
  ]
  });

})
	