// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	let humburger = document.querySelectorAll(".topMenu__contacts__search")
	if(humburger !== null) {
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

		humburger.forEach(item => {
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
			if (!hasAncestor(e.target, overlay[0]) && !hasAncestor(e.target, humburger[0])) {
				closeOverlay();
			}
		})
	}

})
