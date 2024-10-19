let btn = document.querySelector('button')
let color = document.querySelector('.color')

const hex = [
    '0','1','2','3','4','5','6','7','8','9',
    'A','B','C','D','E','F'

]

btn.addEventListener('click',(e)=>{
    let hexColor = getHex()
    document.body.style.background = hexColor
    color.innerHTML = hexColor
})

let getHex=()=>{
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[func()]
        
    }
    return hexColor
}

let func =()=>{
    return Math.floor(Math.random() * hex.length)
}