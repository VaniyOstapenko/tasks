


const image = document.querySelector('.img');

image.addEventListener('mouseover', function(){
    image.style = 'background-image:url(./assets/img2.webp)'
})

image.addEventListener('mouseout', function(){
    image.style = 'background-image:url(./assets/img1.jpg)'
})