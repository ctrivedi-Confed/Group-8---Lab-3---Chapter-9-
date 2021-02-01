/* Step-2 */
window.addEventListener('load',function() {
	// body...
	let images = document.querySelectorAll("#thumbnails img");
	for (let i=0; i<images.length; i++) {
		images[i].addEventListener('click', function() {
			changeThumbnail(images[i]);
		});
	}
});

function changeThumbnail(img) {
	// setting variables for thumbnail and captions
	let thumbnail = document.querySelector('figure img');
	let caption = document.querySelector('figure figcaption');
	let imgPathArr = img.src.split("/");

	thumbnail.src = "images/medium/" + imgPathArr[imgPathArr.length - 1];
	caption.innerHTML = img.title;
}
