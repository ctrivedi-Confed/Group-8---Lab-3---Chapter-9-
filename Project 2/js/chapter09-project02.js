/* Step-2 */

window.addEventListener('load',function() {
	// body...
	let images = document.querySelectorAll("#thumbnails img");
	let featured = document.querySelector('#featured img');
	let caption = document.querySelector('#featured figcaption');
	
	// this property makes the transition whenever the opacity of the target changes
	caption.style.transition = "opacity 1s";

	for (let i=0; i<images.length; i++) {
		images[i].addEventListener('click', function() {
			changeThumbnail(images[i]);
		});
	}

	featured.addEventListener('mouseover', function() {
		for (let i=0; i<images.length; i++) {
			if (getRelativePath(images[i].src) == getRelativePath(featured.src)) {
				caption.innerHTML = images[i].title;
				break;
			}
		}
		// this property sets the opacity to 80% when the mouse goes over the image
		caption.style.opacity = 0.8;
	});

	featured.addEventListener('mouseout', function() {
		// this property sets the opacity to 0% when the mouse goes out of the image
		caption.style.opacity = 0;
	});

	function changeThumbnail(img) {
		// setting variables for thumbnail and captions
		let imgPathArr = img.src.split("/");
	
		featured.src = "images/medium/" + imgPathArr[imgPathArr.length - 1];
		caption.innerHTML = img.title;
	}
});

function getRelativePath(path) {
	return path.split('/')[path.split('/').length - 1]
}
