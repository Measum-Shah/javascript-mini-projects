const panels = document.querySelectorAll('.panel')
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removingactiveClass();
        panel.classList.add('active')
    })
})
function removingactiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}