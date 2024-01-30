let images = document.querySelectorAll('.image-slider img');
let currentImage = 0;

function changeImage(direction) {
    if (direction === 'next') {
        currentImage++;
        if (currentImage === images.length) {
            currentImage = 0;
        }
    } else if (direction === 'prev') {
        currentImage--;
        if (currentImage < 0) {
            currentImage = images.length - 1;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[currentImage].style.display = 'block';
}