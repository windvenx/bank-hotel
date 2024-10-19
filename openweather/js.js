let form = document.querySelector('form')
let h2 = document.querySelector('h2')
let h1 = document.querySelector('h1')
let speed = document.querySelector('.speed')
let humidity = document.querySelector('.humidity')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=5867d88ceb8b86174a687db068ee442a`)
.then((res)=>res.json())
.then((json)=>{
    console.log(json);
    h2.innerHTML = json.name
    h1.innerHTML = `${Math.ceil(json.main.temp-273.15)}°С`
    speed.innerHTML = `${json.wind.speed}m/s`
    humidity.innerHTML = `${json.main.humidity}%`
})

})