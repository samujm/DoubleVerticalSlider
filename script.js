const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLenght = slideRight.querySelectorAll('div').length

// console.log(slidesLenght)
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`

upButton.addEventListener('click', ()=>changeSlide('up'))
downButton.addEventListener('click', ()=>changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    // console.log(sliderHeight)
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLenght - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLenght -1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
