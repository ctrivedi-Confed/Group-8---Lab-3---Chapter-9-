/* Step-2 */

window.addEventListener('load',function() {
    // body...
    let thumbnail = document.querySelector("#thumbnails");
    let featured = document.querySelector('#featured img');
    let caption = document.querySelector('#featured figcaption');

    // this property makes the transition whenever the opacity of the target changes
    caption.style.transition = "opacity 1s";

    thumbnail.addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() == "img") {
            let img = e.target;
            featured.src = 'images/medium/' + getRelativePath(img.src);
            caption.innerHTML = img.title;
            featured.title = img.title;
        }
    });

    featured.addEventListener('mouseover', function() {
        // this property sets the opacity to 80% when the mouse goes over the image
        caption.style.opacity = 0.8;
    });

    featured.addEventListener('mouseout', function() {
        // this property sets the opacity to 0% when the mouse goes out of the image
        caption.style.opacity = 0;
    });
});

function getRelativePath(path) {
    return path.split('/')[path.split('/').length - 1]
}
