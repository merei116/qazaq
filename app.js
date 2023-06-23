const boxes = document.querySelectorAll('.box')
for(const box of boxes){
    box.addEventListener('mouseover', () => {
        box.classList.add('bigger')
    })
}
for(const box of boxes){
    box.addEventListener('mouseout', () => {
        box.classList.remove('bigger')
    })
}

const slidess = document.querySelectorAll('.slides')
for(const slide of slidess){
    slide.addEventListener('click', () => {
        EraseClass()
        slide.classList.add('active')
    })
}
function EraseClass(){
    slidess.forEach((slide) => {
        slide.classList.remove('active')
    }

    )
}