const buttons = document.getElementsByTagName('button')

// for (let i = 0; i < buttons.length; i++){
//     buttons[i].onlick = () => {
//         document.body.style.backgroundColor = buttons[i].innerText
//     }
// }
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = () => {
        document.body.style.background = buttons[i].innerText
    }
}