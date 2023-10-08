// При наведении на картинку изменять ее

document.querySelector('img').addEventListener('mouseover', function () {
    this.src = './serfing-plyazh-volny-zakat.jpg'
})

document.querySelector('img').addEventListener('mouseout', function () {
    this.src = './1623287792_16-krasivosti_pro-p-belgiiskaya-ovcharka-zhivotnie-krasivo-fot-18.jpg'
})