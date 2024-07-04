const pdBig = document.querySelectorAll('.big_img p')
const popular = document.querySelectorAll('.popular')
const miniImg = document.querySelectorAll('.mini_img a img')
const mini = document.querySelectorAll('.mini_img a')

console.log(pdBig)
console.log(popular)
console.log(mini)
console.log(mini[1])
console.log(miniImg)

function noSee (){
    for(let j of pdBig){
    j.style.display = 'none'
}
for(let k of popular){
    k.style.display = 'none'
}
for(let l of miniImg){
    l.style.opacity = '0'
}
}
noSee()
pdBig[2].style.display = 'block'
popular[2].style.display = 'block'
miniImg[2].style.opacity = '1'

mini[0].addEventListener('mouseover',()=>{
    noSee()
    pdBig[0].style.display = 'block'
    popular[0].style.display = 'block'
    miniImg[0].style.opacity = '1'
})
mini[1].addEventListener('mouseover',()=>{
    noSee()
    pdBig[1].style.display = 'block'
    popular[1].style.display = 'block'
    miniImg[1].style.opacity = '1'
})
mini[2].addEventListener('mouseover',()=>{
    noSee()
    pdBig[2].style.display = 'block'
    popular[2].style.display = 'block'
    miniImg[2].style.opacity = '1'
})
mini[3].addEventListener('mouseover',()=>{
    noSee()
    pdBig[3].style.display = 'block'
    popular[3].style.display = 'block'
    miniImg[3].style.opacity = '1'
})
