// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery/dist/jquery.min.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	$('.overlay__accordion').hover(function(){
		$(this).children('.overlay__internalList').removeClass('animate__fadeOutLeft');
    $(this).children('.overlay__internalList').addClass('animate__fadeInLeft');
		}, function(){
		$(this).children('.overlay__internalList').removeClass('animate__fadeInLeft');
		$(this).children('.overlay__internalList').addClass('animate__fadeOutLeft');
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
	let topMenuContactsSearch = document.querySelectorAll(".topMenu__contacts__search")
	if(topMenuContactsSearch !== null) {
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

		topMenuContactsSearch.forEach(item => {
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
			if (!hasAncestor(e.target, overlay[0]) && !hasAncestor(e.target, topMenuContactsSearch[0])) {
				closeOverlay();
			}
		})
	}

})
