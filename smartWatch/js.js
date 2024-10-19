let hour = document.querySelector('.h')
let min = document.querySelector('.m')
let sec = document.querySelector('.s')
let b = document.querySelector('body')
let span = document.querySelectorAll('span')




setInterval(()=>{
let time = new Date()
  let m = time.getMinutes()
  let s = time.getSeconds()  
  let h = time.getHours()  
    hour.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
    if(s<10){
        sec.innerHTML +=`0${s}`
    }    

    if(h<22&&h>17){
        b.style.background = "black"
        span.style.color = "white"
    }else if(h<23&&h>5){
        
    }else if(h>6&&h<12){

    }
},1000)