const giftMenu = document.querySelectorAll('.gift_menu a')
const gift = document.querySelectorAll('.gift')

console.log(giftMenu)
console.log(gift)


function gftMenu(){
    for(let i of giftMenu){
        i.classList.remove('active')
    }
    for(let j of gift){
        j.style.display = 'none'
    }
}
gftMenu()
giftMenu[0].classList.add('active')
gift[0].style.display = 'flex'


giftMenu[0].addEventListener('click',()=>{
    gftMenu()
    giftMenu[0].classList.add('active')
    gift[0].style.display = 'flex'
})
giftMenu[1].addEventListener('click',()=>{
    gftMenu()
    giftMenu[1].classList.add('active')
    gift[1].style.display = 'flex'
})
giftMenu[2].addEventListener('click',()=>{
    gftMenu()
    giftMenu[2].classList.add('active')
    gift[2].style.display = 'flex'
})
giftMenu[3].addEventListener('click',()=>{
    gftMenu()
    giftMenu[3].classList.add('active')
    gift[3].style.display = 'flex'
})
giftMenu[4].addEventListener('click',()=>{
    gftMenu()
    giftMenu[4].classList.add('active')
    gift[4].style.display = 'flex'
})
giftMenu[5].addEventListener('click',()=>{
    gftMenu()
    giftMenu[5].classList.add('active')
    gift[5].style.display = 'flex'
})
giftMenu[6].addEventListener('click',()=>{
    gftMenu()
    giftMenu[6].classList.add('active')
    gift[6].style.display = 'flex'
})
giftMenu[7].addEventListener('click',()=>{
    gftMenu()
    giftMenu[7].classList.add('active')
    gift[7].style.display = 'flex'
})
giftMenu[8].addEventListener('click',()=>{
    gftMenu()
    giftMenu[8].classList.add('active')
    gift[8].style.display = 'flex'
})

//---------------------------------------------------

const choiceMenu = document.querySelectorAll('.choice_menu a')
const show = document.querySelectorAll('.show')
const smallImg = document.querySelectorAll('.small_image a')
const bigImg = document.querySelectorAll('.big_image a')

console.log(choiceMenu)
console.log(show)
console.log(smallImg)
console.log(bigImg)

function choiceMenuReset (){
    for(let j of choiceMenu){
        j.classList.remove('active')
    }
    for(let k of show){
        k.style.display = 'none'
    }
}
choiceMenuReset()
choiceMenu[3].classList.add('active')
show[3].style.display = 'flex'
function bigImgReset(){
    for(let j of bigImg){
        j.style.display = 'none'
    }
}
bigImgReset()
bigImg[7].style.display = 'inline-block'
smallImg[7].classList.add('well02_2')

function smallReset (){
    smallImg[0].classList.remove('hanoo01_2')
    smallImg[1].classList.remove('hanoo02_2')
    smallImg[2].classList.remove('wine01_2')
    smallImg[3].classList.remove('wine02_2')
    smallImg[4].classList.remove('susan01_2')
    smallImg[5].classList.remove('susan02_2')
    smallImg[6].classList.remove('well01_2')
    smallImg[7].classList.remove('well02_2')
    smallImg[8].classList.remove('beauty01_2')
    smallImg[9].classList.remove('beauty02_2')
    smallImg[10].classList.remove('flower01_2')
    smallImg[11].classList.remove('flower02_2')
    smallImg[0].classList.add('hanoo01')
    smallImg[1].classList.add('hanoo02')
    smallImg[2].classList.add('wine01')
    smallImg[3].classList.add('wine02')
    smallImg[4].classList.add('susan01')
    smallImg[5].classList.add('susan02')
    smallImg[6].classList.add('well01')
    smallImg[7].classList.add('well02')
    smallImg[8].classList.add('beauty01')
    smallImg[9].classList.add('beauty02')
    smallImg[10].classList.add('flower01')
    smallImg[11].classList.add('flower02')
}
function choiceAllReset(){
    smallReset()
    bigImgReset()
}
//-------------------------------
smallImg[0].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[0].classList.add('hanoo01_2')
    bigImg[0].style.display = 'inline-block'
})
smallImg[1].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[1].classList.add('hanoo02_2')
    bigImg[1].style.display = 'inline-block'
})
smallImg[2].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[2].classList.add('wine01_2')
    bigImg[2].style.display = 'inline-block'
})
smallImg[3].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[3].classList.add('wine02_2')
    bigImg[3].style.display = 'inline-block'
})
smallImg[4].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[4].classList.add('susan01_2')
    bigImg[4].style.display = 'inline-block'
})
smallImg[5].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[5].classList.add('susan02_2')
    bigImg[5].style.display = 'inline-block'
})
smallImg[6].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[6].classList.add('well01_2')
    bigImg[6].style.display = 'inline-block'
})
smallImg[7].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[7].classList.add('well02_2')
    bigImg[7].style.display = 'inline-block'
})
smallImg[8].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[8].classList.add('beauty01_2')
    bigImg[8].style.display = 'inline-block'
})
smallImg[9].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[9].classList.add('beauty02_2')
    bigImg[9].style.display = 'inline-block'
})
smallImg[10].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[10].classList.add('flower01_2')
    bigImg[10].style.display = 'inline-block'
})
smallImg[11].addEventListener('mouseover',()=>{
    choiceAllReset()
    smallImg[11].classList.add('flower02_2')
    bigImg[11].style.display = 'inline-block'
})
//---------------------------------------------
choiceMenu[0].addEventListener('click',()=>{
    choiceMenuReset()
    choiceMenu[0].classList.add('active')
    show[0].style.display = 'flex'
    choiceAllReset()
    smallImg[0].classList.add('hanoo01_2')
    bigImg[0].style.display = 'inline-block'
})
choiceMenu[1].addEventListener('click',()=>{
    choiceMenuReset()
    choiceMenu[1].classList.add('active')
    show[1].style.display = 'flex'
    choiceAllReset()
    smallImg[2].classList.add('wine01_2')
    bigImg[2].style.display = 'inline-block'
})
choiceMenu[2].addEventListener('click',()=>{
    choiceMenuReset()
    choiceMenu[2].classList.add('active')
    show[2].style.display = 'flex'
    choiceAllReset()
    smallImg[5].classList.add('susan02_2')
    bigImg[5].style.display = 'inline-block'
})
choiceMenu[3].addEventListener('click',()=>{
    choiceMenuReset()
    choiceMenu[3].classList.add('active')
    show[3].style.display = 'flex'
    choiceAllReset()
    smallImg[7].classList.add('well02_2')
    bigImg[7].style.display = 'inline-block'
})
choiceMenu[4].addEventListener('click',()=>{
    choiceMenuReset()
    choiceMenu[4].classList.add('active')
    show[4].style.display = 'flex'
    choiceAllReset()
    smallImg[8].classList.add('beauty01_2')
    bigImg[8].style.display = 'inline-block'
})
choiceMenu[5].addEventListener('click',()=>{
    choiceMenuReset()
    choiceMenu[5].classList.add('active')
    show[5].style.display = 'flex'
    choiceAllReset()
    smallImg[10].classList.add('flower01_2')
    bigImg[10].style.display = 'inline-block'
})
