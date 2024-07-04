const sub = document.querySelectorAll('.lnb')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
console.log(sub)
console.log(sub_bg)
console.log(nav)


sub_bg.style.height = '0'
sub_bg.style.transition = 'height 0.3s'
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden';
    i.style.transition = 'height 0.3s'
}

nav.addEventListener('mouseover',()=>{
    sub_bg.style.height = '260px'
    for(let i of sub){
        i.style.height = '260px'
    }
})
nav.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    for(let i of sub){
        i.style.height = '0'
    }
})