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


const nav2 = document.querySelector('.price_sch')
const nav3 = document.querySelector('.sch')
const sub2 = document.querySelector('.price_list')
const sub3 = document.querySelector('#search_product')
console.log(nav2)
console.log(nav3)
console.log(sub2)
console.log(sub3)

sub2.style.height = '0';
sub2.style.overflow = 'hidden';
sub2.style.transition = 'height 0.3s'

sub3.style.height = '0';
sub3.style.overflow = 'hidden';
sub3.style.transition = 'height 0.3s'

nav2.addEventListener('mouseover',()=>{
    sub_bg.style.height = '260px'
    sub2.style.height = '260px'
})
nav2.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    sub2.style.height = '0'
})

nav3.addEventListener('mouseover',()=>{
    sub_bg.style.height = '260px'
    sub3.style.height = '260px'
})
nav3.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    sub3.style.height = '0'
})
sub2.addEventListener('mouseover',()=>{
    sub_bg.style.height = '260px'
    sub2.style.height = '260px'
})
sub2.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    sub2.style.height = '0'
})

sub3.addEventListener('mouseover',()=>{
    sub_bg.style.height = '260px'
    sub3.style.height = '260px'
})
sub3.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    sub3.style.height = '0'
})