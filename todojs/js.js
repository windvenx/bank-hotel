const ul = document.querySelector('.todo__tasks')
let form = document.querySelector('form')
const btnClear = document.querySelector('.btn__clearall')
let p = document.querySelector('.todo__bottom p')
let bg = document.querySelector('.todo__line')

let arr = []
let todoShow = ()=>{
    let done = arr.filter((el)=>el.isDone).length
    bg.style.width = `${(100 / arr.length) * done}%`
    if(bg.style.width  <'33%'){
        bg.style.background = 'red'
    }else if (bg.style.width  >'66%'){
        bg.style.background = 'yellow'
    }else{
        bg.style.background = 'blue'
    }
    p.textContent = `you have ${arr.filter((el)=>el.isDone).length}/${arr.length}`

    ul.innerHTML = ''
    arr.forEach((el,idx)=>{
        ul.innerHTML += `<li style="color:${el.isDone===true? 'green':''}">${idx+1}) ${el.text} 
        <button data-id=${el.id} class="btn__del">удалить</button>
        <button style="color:${el.isDone? 'green':''}" data-id=${el.id} class="btn__done">${el.isDone===true?'выполнено':'выполнить'}</button>
        </li>`
    })

    let btnsDel = document.querySelectorAll('.btn__del')
        btnsDel.forEach((el)=>{
            el.addEventListener('click',()=>{
                arr = arr.filter((item)=>{
                        return item.id !== +el.dataset.id
                }).map((item,idx)=>{
                    return {...item, id:idx+1}
                })
                todoShow()
            })
        })
    let btnsDone = document.querySelectorAll('.btn__done')
        btnsDone.forEach((el)=>{
            el.addEventListener('click',()=>{
                arr = arr.map((item)=>{
                    if(item.id === +el.dataset.id){
                        return {...item,isDone:!item.isDone}
                    } 
                        return item
                        
                })
                todoShow()
                
            })
        })
}

todoShow()
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    arr = [...arr,
        {
            id:arr.length + 1,
            text:e.target[0].value,
            isDone:false
        }
    ]
    e.target[0].value = ''
    todoShow()
})
btnClear.addEventListener('click',()=>{
    arr = []
    todoShow()
})


// let a = +'1'
// console.log(typeof a);
// let func = (arr)=>{
// return arr.filter((el)=>{
//     return el.isDone
// }).length
// }
// console.log(func(
//     [
//         {id:1,text:'qwert',isDone:false},
//         {id:2,text:'asdfgh',isDone:true},
//         {id:3,text:'xcvb',isDone:true}
//     ]
//     ));
    // необходимо получить число выполненых заданий. или же получить новый массив где лежат только выполненые задания и после получить его длину