(function($) {

  // scroll animation for the homapage
  const homapageScrolling = {
    cacheDom: function() {
      this.projects = document.querySelectorAll('.block-grid figure');
    },

    animateHomepage: function() {
      this.projects.forEach(element => {
        element.className += ' wow zoomIn'
        element.setAttribute('data-wow-duration', '.5s')
      });

      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: '100',
        mobile: true,
        live: true
      });

      wow.init();
    },

    init: function() {
      this.cacheDom();
      this.animateHomepage();
    }
  }

  homapageScrolling.init();

  // animate work page scroll
  const workpageScrolling = {
    cacheDom: function() {
      this.projects = document.querySelectorAll('.block-grid');
    },

    animateWorkpage: function() {
      this.projects.forEach(element => {
        element.className += ' wow zoomIn'
        element.setAttribute('data-wow-duration', '.5s')
        element.setAttribute('data-wow-delay', '.3s')

      });

      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: '300',
        mobile: true,
        live: true
      });

      wow.init();
    },

    init: function() {
      this.cacheDom();
      this.animateWorkpage();
    }
  }

  // animate about page scroll
  const aboutpageScrolling = {
    cacheDom: function() {
      this.aboutSection = document.querySelectorAll('.about-section *');
    },

    animateAboutpage: function() {
      this.aboutSection.forEach(element => {
        element.className += ' wow fadeIn';
        element.setAttribute('data-wow-duration', '1s')
      });

      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: '100',
        mobile: true,
        live: true
      });

      wow.init();
    },

    init: function() {
      this.cacheDom();
      this.animateAboutpage();
    }
  }

  // animate design page scroll
  const designpageScrolling = {
    cacheDom: function() {
      this.designSection = document.querySelectorAll('.design-lab-grid .grid');
    },

    animateDesignpage: function() {
      this.designSection.forEach(element => {
        element.className += ' wow zoomIn';
        element.setAttribute('data-wow-duration', '.5s')
      });

      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: '100',
        mobile: true,
        live: true
      });

      wow.init();
    },

    init: function() {
      this.cacheDom();
      this.animateDesignpage();
    }
  }


  const burgerMenu = {
    cacheDom: function() {
      this.body = $('body');
      this.burger_menu = document.querySelector('.burger-menu')
      this.mobile_nav = document.querySelector('.mobile-page-navigation')
      this.close_mobile_nav = document.querySelector('.close-navigation-menu')
    },
    openMenu: function() {
      this.burger_menu.addEventListener('click', ()=> {
        this.mobile_nav.classList.add('isActive');
        this.body.css('overflow', 'hidden');
      });
    },
    closeMenu: function() {
      this.close_mobile_nav.addEventListener('click', ()=> {
        this.mobile_nav.classList.remove('isActive');
        this.body.css('overflow', 'auto');
      });
    },
    closeMenuOnLinkClick: function() {
      window.addEventListener('click', function(event) {
        
        if(event.target.classList.contains('link-internal')) {
          $('body').css('overflow', 'auto');
          this.setTimeout(()=> {
            $('.mobile-page-navigation').removeClass('isActive');
          },300);
        }
        
      })
    },
    init: function() {
      this.cacheDom();
      this.openMenu();
      this.closeMenu();
      this.closeMenuOnLinkClick();
    }
  }
  burgerMenu.init();

  const pageLoad = {
    cacheDom: function() {
      this.document = $(document);
      this.page = document.querySelector('#page-wrapper');
    },
    loadeNewPage: function(url) {
      return fetch(url, {
        method: 'GET'
      }).then(response => {
        return response.text();
      })
    },
    animatePage: function(oldContent, newContent, url, pageType) {
      if (url != this.pageURL) {
        //fade in new content - about
        if (pageType == 'about') {
          
          page.body.data('page-type', 'about');
          let tl = new TimelineMax(),
              splitText = new SplitText('.page-title-animation-about', { type: 'lines' }),
              pageElements = $('.page-loading-transform-up');

          tl.staggerFrom(splitText.lines, 2, { 
            y: '+=400', 
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.2')

          tl.from(pageElements, 2, {
            y: '+=200',
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.5');

          // animate about page scroll
          aboutpageScrolling.init();
        }

        if (pageType == 'index') {

          page.body.data('page-type', 'index');
          let tl = new TimelineMax(),
              $myName = $('.myName-animation'),
              $pageResume = $('.page-resume-animation'),
              $pageSubitle = $('.page-subtitle-animation'),
              $pageTitle = $('.page-title-animation');

          tl.from([$pageTitle, $pageSubitle, $pageResume, $myName], 2, {
            y: '+=200',
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.5');

          // animate home page scroll
          homapageScrolling.init();
        }
        
        if (pageType == 'designshop') {

           // animate design page scroll
           designpageScrolling.init();
          
          page.body.data('page-type', 'designshop');
          let tl = new TimelineMax(),
              pageElements = $('.page-loading-transform-up');

          tl.from(pageElements, 2, {
            y: '+=200',
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.5');

         
        }

        if (pageType == 'work') {
          
          page.body.data('page-type', 'work');
          let tl = new TimelineMax(),
              splitText = new SplitText('.page-title-animation-work', { type: 'lines' }),
              pageElements = $('.page-loading-transform-up');

          tl.staggerFrom(splitText.lines, 2, { 
            y: '+=400', 
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.2')

          tl.from(pageElements, 2, {
            y: '+=200',
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.5');

          // animate work page scroll
          workpageScrolling.init();
        }

        // remove old page
        this.page.removeChild(oldContent)
      }
    },
    changePage: function(pageType) {
      let url = window.location.href;
      this.loadeNewPage(url).then(responseTxt => {
        let $container = document.createElement('div');
        $container.innerHTML = responseTxt;
        let oldContent = document.querySelector('.page-wrapper-inner'),
            newContent = $container.querySelector('.page-wrapper-inner');

        // insert the content before the footer element
        this.page.insertBefore(newContent, document.querySelector('#footer'));

        // start page loading animation
        this.animatePage(oldContent, newContent, url, pageType);
      })
    },
    clickListener: function() {
      this.document.on('click', '.link-internal', event => {
        let tl = new TimelineMax(),
            $target = $(event.target),
            url = $target.attr('href'),
            $overlay = $('.overlay-loading');

        url = url != undefined ? url : $target.closest('a').attr('href');

        if (url == 'index.html') {
          this.loadIndex(tl, $target, url, $overlay);
        }

        if (url == 'about.html') {
          this.loadAbout(tl, $target, url, $overlay)
        }

        if (url == 'designshop.html') {
          this.loadDesignshop(tl, $target, url, $overlay)
        }

        if (url == 'work.html') {
          this.loadWork(tl, $target, url, $overlay)
        }

        // add the new url to the history pushstate
        history.pushState(null, null, url);

        // call the function to chnage the page
        event.preventDefault();


      })
    },

    loadIndex: function(tl, $target, url, $overlay) {
      let pageElements = $('.page-loading-transform-up');
      tl.fromTo(pageElements, 0.6, {
        y: '0',
      },{
        y: '-=200',
        autoAlpha: 0,
        ease: Power4.easeIn
      }, '0.2');

      tl.to(window, 1, {
        scrollTo: '#page-top',
        onComplete: () => {
          this.changePage('index');
        }
      });

      tl.fromTo($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, {
        scaleY: 1,
        ease: Power2.easeOut
      }, '-=0.4')

      tl.to($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: Power3.easeIn
      });
    },
    loadAbout: function(tl, $target, url, $overlay) {
      let pageElements = $('.page-loading-transform-up');

      tl.fromTo(pageElements, 0.6, {
        y: '0',
      },{
        y: '-=200',
        autoAlpha: 0,
        ease: Power4.easeIn
      }, '0.2');

      tl.to(window, 1, {
        scrollTo: '#page-top',
        onComplete: () => {
          this.changePage('about');
        }
      });

      tl.fromTo($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, {
        scaleY: 1,
        ease: Power2.easeOut
      }, '-=0.6')

      tl.to($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: Power3.easeIn
      });

    },

    loadDesignshop: function(tl, $target, url, $overlay) {
      let pageElements = $('.page-loading-transform-up');
      tl.fromTo(pageElements, 0.6, {
        y: '0',
      },{
        y: '-=200',
        autoAlpha: 0,
        ease: Power4.easeIn
      }, '0.2');

      tl.to(window, 1, {
        scrollTo: '#page-top',
        onComplete: () => {
          this.changePage('designshop');
        }
      });

      tl.fromTo($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, {
        scaleY: 1,
        ease: Power2.easeOut
      }, '-=0.4')

      tl.to($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: Power3.easeIn
      });
    },

    loadWork: function(tl, $target, url, $overlay) {
      let pageElements = $('.page-loading-transform-up');
      tl.fromTo(pageElements, 0.6, {
        y: '0',
      },{
        y: '-=200',
        autoAlpha: 0,
        ease: Power4.easeIn
      }, '0.2');

      tl.to(window, 1, {
        scrollTo: '#page-top',
        onComplete: () => {
          this.changePage('work');
        }
      });

      tl.fromTo($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, {
        scaleY: 1,
        ease: Power2.easeOut
      }, '-=0.4')

      tl.to($overlay, 0.6, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: Power3.easeIn
      });
    },

    init: function() {
      this.cacheDom();
      this.clickListener();
    }

  }

  const page = {
    cacheDom: function() {
      this.window = $(window);
      this.body = $('body');
      this.pageWrapper = $('#page-wrapper');
      this.isProtected = false
    },
    // when the page is loading
    // we want to display the loader
    loadAnimation: function() {
      
        let tl = new TimelineMax(),
            $loader = $('.preloader'),
            $loaderImg = $('.preloader img');

        tl.to($loaderImg, 0.4, {
          y: '-=20px',
          opacity: 0,
          ease: Power4.easeIn
        }).to($loader, 0.6, {
          scaleY: 0,
          transformOrigin: '0 0',
          ease: Power4.easeIn
        }).to('body', 1, {
          overflow: 'auto'
        })

        if ($('.page-title-animation').length) {
          let $myName = $('.myName-animation'),
              $pageLink = $('.page-link'),
              $pageSubitle = $('.page-subtitle-animation'),
              $pageTitle = $('.page-title-animation');

          tl.from([$pageTitle, $pageSubitle, $pageLink, $myName], 2, {
            y: '+=200',
            autoAlpha: 0,
            rotation: 5,
            ease: Power3.easeOut
          }, '0.5');
        }

    },

    pageLoading: function() {

      window.addEventListener('load', function() {
        setTimeout(()=> {
          page.loadAnimation();
          pageLoad.init();
        },1000)
      });

    },

    windowPopStateListener: function() {
      window.addEventListener('popstate', ()=> {
        let currPageType = page.body.data('page-type'),
            tl = new TimelineMax(),
            $overlay = $('.overlay-loading'),
            pageElements = $('.page-loading-transform-up');

        tl.fromTo(pageElements, 0.6, {
          y: '0',
        },{
          y: '-=200',
          autoAlpha: 0,
          ease: Power4.easeIn
        }, '0.2');

        tl.to(window, 1, {
          scrollTo: '#page-top',
          onComplete: () => {
            pageLoad.changePage(currPageType);
          }
        });

        tl.fromTo($overlay, 0.6, {
          scaleY: 0,
          transformOrigin: '100% 100%'
        }, {
          scaleY: 1,
          ease: Power2.easeOut
        }, '-=0.4')

        tl.to($overlay, 0.6, {
          scaleY: 0,
          transformOrigin: '0 0',
          ease: Power3.easeIn
        });
        
      })
    },

    animateFooter: function() {
      this.footer = document.querySelectorAll('.footer');
      this.footer.forEach(element => {
        element.className += ' wow zoomIn'
        element.setAttribute('data-wow-duration', '.5s')
      });

      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: '0',
        mobile: true,
        live: true
      });

      wow.init();
    },

    scrollToTop: function() {

      let tl = new TimelineMax(),
          scrollToTopBtn = document.querySelector('.scroll-up');

      scrollToTopBtn.addEventListener('click', ()=> {
        tl.to(window, 1, {
          scrollTo: '#page-top',
        });
      });
      
    },

    init: function() {
      this.cacheDom();
      this.pageLoading();
      this.animateFooter();
      this.scrollToTop();
      this.windowPopStateListener();
    }

  }
  page.init();
}(jQuery))