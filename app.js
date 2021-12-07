document.querySelector('.btn-Up').addEventListener('click',() => {
    let target = document.querySelector('.value')
    let number = parseInt(target.innerHTML)
    target.innerHTML = ++number
})

document.querySelector('.btn-Down').addEventListener('click',() => {
    let target = document.querySelector('.value')
    let number = parseInt(target.innerHTML)
    target.innerHTML = --number
})

document.querySelector('.btn-Zero').addEventListener('click',() => {      
    document.querySelector('.value').innerHTML = 0
})