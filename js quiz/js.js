let box = document.querySelector('.box')
let btnNext = document.querySelector('.btn__next')
let progress = document.querySelector('.count__progress')
let progressBar = document.querySelector('.progress__line')
let btnAdd = document.querySelector('.btn__add')
let popup = document.querySelector('.popup')
let p = document.querySelector('p')
let timer = document.querySelector('.timer')

let popupToggle = ()=>{
    popup.classList.toggle('active')
}



let arr = [
    {id:1,question:'вопрос1',variants:[
        {text:'ответ1',isRight:false},
        {text:'ответ2',isRight:false},
        {text:'ответ3',isRight:false},
        {text:'ответ4',isRight:true},
    ]
    },
    {id:2,question:'вопрос2',variants:[
        {text:'ответ1',isRight:false},
        {text:'ответ2',isRight:false},
        {text:'ответ3',isRight:false},
        {text:'ответ4',isRight:true},
    ]
    },
    {id:3,question:'вопрос3',variants:[
        {text:'ответ1',isRight:false},
        {text:'ответ2',isRight:false},
        {text:'ответ3',isRight:false},
        {text:'ответ4',isRight:true},
    ]
    },
    {id:4,question:'вопрос4',variants:[
        {text:'ответ1',isRight:false},
        {text:'ответ2',isRight:false},
        {text:'ответ3',isRight:false},
        {text:'ответ4',isRight:true},
    ]
    },
    {id:5,question:'вопрос5',variants:[
        {text:'ответ1',isRight:false},
        {text:'ответ2',isRight:false},
        {text:'ответ3',isRight:false},
        {text:'ответ4',isRight:true},
    ]
    }
]


let count = 1
let result = []


let func  = ()=>{
    
    box.innerHTML = ''
        const answer = arr[count-1].variants.map((item)=>{
            let strItem = JSON.stringify({...arr[count-1],variants:[item]})
            return `<label>
            <input value=${strItem} type="radio" name="variant">
        <span>${item.text}</span>
            </label>`
        }).join('')

        
        box.innerHTML +=`
        <div>
        <p>${arr[count-1].question}</p>
        <ul>
          ${answer}
        </ul>
        </div>
        `  
progress.textContent = ` ${count} of ${arr.length} Questions`
let allInputs = document.querySelectorAll('input')

allInputs.forEach((el)=>{
    el.addEventListener('change',(e)=>{
       result = [...result,JSON.parse(e.target.value)]
       
    })
})


}
let progrss = 0;

btnNext.addEventListener('click',(e)=>{
    e.preventDefault()
    if (progrss < arr.length) {
        progrss++
        const prg = progrss / arr.length
        progressBar.style.transform = `scaleX(${prg})`
    }
    
    
    count = count  + 1
    if(count > arr.length - 1){
        btnNext.style.display = 'none'
    }
    func()
    })

    btnAdd.addEventListener('click',(e)=>{
        e.preventDefault()
        clearInterval(intervalTimer);
        popup.classList.toggle('active')    
       let newArr = result.map((el)=>{
        return el.variants
       }).filter((el)=>{
        for(let i=0;i<el.length;i++){
            return el[i].isRight ===true
        }
       }).length
       
       p.innerHTML +=`правильных ответов :${newArr}`
       
    })
    let i = 60
let showNumber = (num)=>{
     i-=num
    console.log(i);
    timer.textContent = i; 
    
    if(i === 0){
        clearInterval(intervalTimer)
        popup.classList.toggle('active')   
        btnAdd.style.display='none'
    }
}
let intervalTimer = setInterval(showNumber,1000,1)


func()