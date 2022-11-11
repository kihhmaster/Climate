// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery/dist/jquery.min.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs } from 'swiper'
Swiper.use([ Parallax, Mousewheel,  Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs] )

document.addEventListener('DOMContentLoaded', () => {
	var tabNavs = document.querySelectorAll(".nav-tab");
	var tabPanes = document.querySelectorAll(".tab-pane");
  if(tabNavs !==null & tabPanes !==null) {
		tabClick() 
	}
	function tabClick() {
		for (var i = 0; i < tabNavs.length; i++) {

			tabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavs.length; j++) {
					var contentAttr = tabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavs[j].classList.add("active");
						tabPanes[j].classList.add("active"); 
					} else {
						tabNavs[j].classList.remove("active");
						tabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}

	//swiper-container
	const swiperSuggestion = new Swiper('.swiper__suggestion__slide', {
		slidesPerView: "auto",
		spaceBetween: 20,
		loop: false,
		pagination: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next__suggestion',
			prevEl: '.swiper-button-prev__suggestion',
		},
		breakpoints: {
			// when window width is >= 480px
			1200: {
				slidesPerView: 4,
				spaceBetween: 30
			},
		}
	
	})
	const seriesProducts = new Swiper('.seriesProducts__slide', {
		slidesPerView: "auto",
		spaceBetween: 20,
		loop: false,
		pagination: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next__suggestion',
			prevEl: '.swiper-button-prev__suggestion',
		},
		breakpoints: {
			// when window width is >= 480px
			1200: {
				slidesPerView: 4,
				spaceBetween: 30
			},
		}
	
	})
	const newOfferSliderMob = new Swiper('.newOffer__sliderMob', {
		slidesPerView: 1.5,
		spaceBetween: 15,
		loop: false,
		pagination: false,
	
	})
	const publicationsSliderMob = new Swiper('.publications__sliderMob', {
		slidesPerView: 1.5,
		spaceBetween: 15,
		loop: false,
		pagination: false,
	
	})
	const  tilterTopTypeMob = new Swiper('.tilter__top__type__mob', {
		slidesPerView: 1.5,
		spaceBetween: 20,
		loop: false,
		pagination: false,
		breakpoints: {
			// when window width is >= 480px
			440: {
				slidesPerView: 2.2,
				spaceBetween: 30
			},
		}
	
	})
	//swiper-container

	// Custom JS
	$('.overlay__accordion').hover(function(){
		$(this).removeClass('accordion__active');
		$(this).addClass('accordion__active');
		$(this).children('.overlay__internalList').removeClass('animate__fadeOut');
    $(this).children('.overlay__internalList').addClass('animate__fadeIn');
		}, function(){
		$(this).addClass('accordion__active');
		$(this).removeClass('accordion__active');
		$(this).children('.overlay__internalList').removeClass('animate__fadeIn');
		$(this).children('.overlay__internalList').addClass('animate__fadeOut');
	});
	// accordions
	const accordions = document.querySelectorAll(".accordion");

	const openAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.add("accordion__active");
		console.log(content.style.maxHeight = content.scrollHeight + "px")
		content.style.maxHeight = content.scrollHeight + "px";
	};

	const closeAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.remove("accordion__active");
		content.style.maxHeight = null;
	};

	accordions.forEach((accordion) => {
		const intro = accordion.querySelector(".accordion__intro");
		const content = accordion.querySelector(".accordion__content");

		intro.onclick = () => {
			if (content.style.maxHeight) {
				closeAccordion(accordion);
			} else {
				accordions.forEach((accordion) => closeAccordion(accordion));
				openAccordion(accordion);
			}
		};
	});

	// accordions

	let menu = document.querySelectorAll(".menu")
	if(menu !== null) {
		let overlay = document.querySelectorAll(".topMenu__overlay")
		let overlayClose = document.querySelectorAll(".overlay__clase")

		function closeOverlay() {
			overlay.forEach(i => {
				i.classList.add("animate__fadeOutLeft"); 
				i.classList.remove("animate__fadeInLeft");
				setTimeout(()=>{
					i.classList.remove("active");
				}, 600)
			});
		}

		menu.forEach(item => {
			item.addEventListener("click", ()=>{
				overlay.forEach(i => {
					i.classList.add("active");
					i.classList.remove("animate__fadeOutLeft");
					i.classList.add("animate__fadeInLeft");
				});
			});
		});
		overlayClose.forEach(close => {
			close.addEventListener("click", ()=>{
				closeOverlay();
			});
		});
		document.addEventListener('click', (e) => {
			function hasAncestor(el, ancestor) {
				return el.parentNode && (el.parentNode === ancestor || hasAncestor(el.parentNode, ancestor));
			}
			if (!hasAncestor(e.target, overlay[0]) && !hasAncestor(e.target, menu[0])) {
				closeOverlay();
			}
		})
	}
	let filterTopButton = document.querySelectorAll(".filter__top__button")
	if(filterTopButton !== null) {
		let overlay = document.querySelectorAll(".catalogue__filer__wrap__overlay")
		let overlayClose = document.querySelectorAll(".overlay__clase")

		function closeOverlay() {
			overlay.forEach(i => {
				i.classList.add("animate__fadeOutLeft"); 
				i.classList.remove("animate__fadeInLeft");
				setTimeout(()=>{
					i.classList.remove("active");
				}, 600)
			});
		}

		filterTopButton.forEach(item => {
			item.addEventListener("click", ()=>{
				overlay.forEach(i => {
					i.classList.add("active");
					i.classList.remove("animate__fadeOutLeft");
					i.classList.add("animate__fadeInLeft");
				});
			});
		});
		overlayClose.forEach(close => {
			close.addEventListener("click", ()=>{
				closeOverlay();
			});
		});
		document.addEventListener('click', (e) => {
			function hasAncestor(el, ancestor) {
				return el.parentNode && (el.parentNode === ancestor || hasAncestor(el.parentNode, ancestor));
			}
			if (!hasAncestor(e.target, overlay[0]) && !hasAncestor(e.target, filterTopButton[0])) {
				closeOverlay();
			}
		})
	}
	let chapterButtonMob = document.querySelectorAll(".chapter__button__mob")
	if(chapterButtonMob !== null) {
		let overlay = document.querySelectorAll(".chapter")
		let overlayClose = document.querySelectorAll(".overlay__clase")

		function closeOverlay() {
			overlay.forEach(i => {
				i.classList.add("animate__fadeOutLeft"); 
				i.classList.remove("animate__fadeInLeft");
				setTimeout(()=>{
					i.classList.remove("active");
				}, 600)
			});
		}

		chapterButtonMob.forEach(item => {
			item.addEventListener("click", ()=>{
				overlay.forEach(i => {
					i.classList.add("active");
					i.classList.remove("animate__fadeOutLeft");
					i.classList.add("animate__fadeInLeft");
				});
			});
		});
		overlayClose.forEach(close => {
			close.addEventListener("click", ()=>{
				closeOverlay();
			});
		});
		document.addEventListener('click', (e) => {
			function hasAncestor(el, ancestor) {
				return el.parentNode && (el.parentNode === ancestor || hasAncestor(el.parentNode, ancestor));
			}
			if (!hasAncestor(e.target, overlay[0]) && !hasAncestor(e.target, chapterButtonMob[0])) {
				closeOverlay();
			}
		})
	}



	var galleryThumbs = new Swiper(".gallery-thumbs", {
		centeredSlides: true,
		centeredSlidesBounds: true,
		slidesPerView: 5,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		direction: 'vertical',
		spaceBetween: 16,
	});
	
	var galleryMain = new Swiper(".gallery-main", {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	992: {
		// 		slidesPerView: 2.2,
		// 		spaceBetween: 30
		// 	},
		// }
	});
	var blogCardSwiperThumbs = new Swiper(".blog__card__swiper__thumbs", {
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var  blogCardSwiper = new Swiper(".blog__card__swiper", {
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: blogCardSwiperThumbs,
		},
	});
	
	galleryMain.on('slideChangeTransitionStart', function() {
		galleryThumbs.slideTo(galleryMain.activeIndex);
	});
	
	galleryThumbs.on('transitionStart', function(){
		galleryMain.slideTo(galleryThumbs.activeIndex);
	});

})
