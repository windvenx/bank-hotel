let a = location.hash.replace('#','')
console.log(a)
let card = document.querySelector('.card')

fetch(`https://fakestoreapi.com/products/${a}`)
.then((res)=>res.json())
.then((json)=>{
card.innerHTML = `
<img src=${json.image} alt=''>
`
})