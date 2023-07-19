var face = document.querySelector('.head-face')
var rotator = document.querySelector('.head-rotator')
face.addEventListener('mouseenter', () => {
    rotator.style.transform = 'rotate(-90deg)'
})
face.addEventListener('mouseleave', () => {
    rotator.style.transform = 'rotate(0deg)'
})
var navBar= document.querySelector('.nav')
var navLogo = document.querySelector('.nav-logo-foreground')
var navDisplay = document.querySelector('.nav-display')
var headFoot = document.querySelector('.head-foot')
navBar.classList.add('none')
face.addEventListener('click', () => {
    navBar.classList.remove('none')
    navDisplay.classList.add('none')
    headFoot.classList.add('none')
})
navLogo.addEventListener('click', () => {
    navBar.classList.add('none')
    navDisplay.classList.remove('none')
    headFoot.classList.remove('none')

})
var navFore = document.querySelector('.nav-logo-fore')
var navBack = document.querySelector('.nav-logo-back')
navFore.addEventListener('mouseenter', () => {
    navBack.style.transform = 'rotate(-90deg)'
})
navFore.addEventListener('mouseleave', () => {
    navBack.style.transform = 'rotate(0deg)'
})
var headLine = document.querySelector('.head-line')
var navIcon = document.querySelector('.nav-icon')
headLine.addEventListener('click', () => {
    navBar.classList.remove('none')
})
navIcon.addEventListener('click', () => {
    navBar.classList.add('none')
})
function showHex(num) {
    let imgElement = document.querySelector('.centre-mid2-hex-image');
    if (num == 0) {
      imgElement.src = 'Images/blacksalem.webp';
    }
    if (num == 1){
      imgElement.src = 'Images/red lobster.webp';
    }
    if (num == 2) {
        imgElement.src = 'Images/purple deep.webp';
    }
    if (num == 3){
        imgElement.src = 'Images/baby blue.webp';
    }
    if (num == 4) {
        imgElement.src = 'Images/tuckreal.webp';
    }
    if (num == 5){
        imgElement.src = 'Images/goldmetallic.webp';
    }
    if (num == 6) {
        imgElement.src = 'Images/bluenavy.webp';
    }
    if (num == 7){
        imgElement.src = 'Images/greenfrog.webp';
    }
    if (num == 8) {
        imgElement.src = 'Images/orange ripe.webp';
    }
    if (num == 9){
        imgElement.src = 'Images/blue sea.webp';
    }
    if (num == 10) {
        imgElement.src = 'Images/yellow banana.webp';
    }
    if (num == 11){
        imgElement.src = 'Images/pink fluro.webp';
    }
  }
  
  
  