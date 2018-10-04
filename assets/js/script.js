$(function() {
  $('.burger').on('click', function() {
    $(this).toggleClass('burger-anim');
    $('.slide-menu').toggleClass('slide-down');
    $('.slide-menu > .links').toggleClass('links-anim');
    $('.slide-menu > .social-links').toggleClass('social-anim');
  });
  
  // waypoint
  
});

//Time line
let timeLineFill = document.querySelector('.time-line-fill');
window.addEventListener('scroll', ()=> {
  let max = document.body.scrollHeight - innerHeight;
  timeLineFill.style.height = `${(pageYOffset / max)* 100}%`;
});

// Functions spyScroll Timeline
function getSections($links) {
return $(
  $links
  .map((i, el) => $(el).attr('href'))
  .toArray()
  .filter(href => href.charAt(0) === '#')
  .join(','),
  );
}

function activateLink($sections, $links) {
  const yPosition = $window.scrollTop();
  
  for (let i = $sections.length - 1; i >= 0; i -= 1) {
    const $section = $sections.eq(i);
    
    if (yPosition >= $section.offset().top) {
      return $links
      .removeClass('active')
      .filter(`[href="#${$section.attr('id')}"]`)
      .addClass('active');
    }
  }
}

function onScrollHandler() {
  activateLink($sections, $links);
}

function onClickHandler(e) {
const href = $.attr(e.target, 'href');

e.preventDefault();
$root.animate(
  { scrollTop: $(href).offset().top },
  500,
  () => (window.location.hash = href),
  );
  
  return false;
}

// Variables
const $window = $(window);
const $links = $('ul > li > a');
const $sections = getSections($links);
const $root = $('html, body');
const $hashLinks = $('a[href^="#"]:not([href="#"])');

// Events
$window.on('scroll', onScrollHandler);
$hashLinks.on('click', onClickHandler);

// waypoint --
var contentWayPoint = function() {
  var i = 0;
  $('.animate-box').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('animated') ) {
      
      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .animate-box.item-animate').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn animated');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated');
            } else if ( effect === 'fadeInDown') {
              el.addClass('fadeInDown animated');
            } else if ( effect === 'fadeInUp') {
              el.addClass('fadeInUp animated');
            } else if ( effect === 'bounceIn') {
              el.addClass('bounceIn animated');
            }

            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });
        
      }, 100);
      
    }

  } , { offset: '85%' } );
};

$(function() {
  contentWayPoint();
});


// animate bar chart height when skills has class
// of animated
window.addEventListener('scroll', function() {
  var skills = $('.skills-progress');
  if (skills.hasClass('animated')) {
    setTimeout(setBarHeight, 500);
  }else {
    console.log('No')
  }
})

// get all bar-chart
// and set their height form dataset
var setBarHeight = function() {
  let barChart = document.querySelectorAll('.bar-chart');

  barChart.forEach((el,idx)=> {
    var height = el.attributes['data-height'].value;
    el.style.height = height + 'px';
  })
}

