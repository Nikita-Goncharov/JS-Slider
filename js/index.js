// console.log('hello')

const prevButton = document.querySelector('main .slider .navigate-buttons .prev-button')
const nextButton = document.querySelector('main .slider .navigate-buttons .next-button')
const currentImage = document.querySelector('main .slider .slider-image')

const sliderImagesSource = ['img/slider1.jpg', 'img/slider2.jpg', 'img/slider3.jpg']
const re = /img\/slider[0-9].jpg/

const prevImageSelector = () => {
    let prevImage = null;
    let indexOfCurrentImage = sliderImagesSource.indexOf(currentImage.src.match(re)[0])
    if (indexOfCurrentImage === 0) {
        prevImage = sliderImagesSource[sliderImagesSource.length - 1]
    } else {
        prevImage = sliderImagesSource[indexOfCurrentImage - 1]
    }

    currentImage.src = prevImage
}

const nextImageSelector = () => {
    let nextImage = null;
    let indexOfCurrentImage = sliderImagesSource.indexOf(currentImage.src.match(re)[0])
    if (indexOfCurrentImage === sliderImagesSource.length - 1) {
        nextImage = sliderImagesSource[0]
    } else {
        nextImage = sliderImagesSource[indexOfCurrentImage + 1]
    }

    currentImage.src = nextImage
}

prevButton.addEventListener('click', prevImageSelector)
nextButton.addEventListener('click', nextImageSelector)