let popup = document.querySelector('.popup')


let popupToggle = ()=>{
    popup.classList.toggle('active')
}

const ul = document.querySelector('.stocks')
const p = document.querySelector('.p')
const arr = [
  {id:1,
    name: "boots1",
    size: 43,
    price: 1000,
    desc:"cool shoes"
  },
  {id:2,
    name: "boots2",
    size: 43,
    price: 1000,
    desc:"cool shoes"
  },
  {id:3,
    name: "boots3",
    size: 43,
    price: 1000,
    desc:"cool shoes"
  },
  {id:4,
    name: "boots34",
    size: 43,
    price: 1000,
    desc:"cool shoes"
  },
  {id:5,
    name: "boots35",
    size: 43,
    price: 1000,
    desc:"cool shoes"
  },
  {id:6,
    name: "boots36",
    size: 43,
    price: 1000,
    desc:"cool shoes"
  },
]
let arrCart = []

let btn = document.querySelectorAll('button')
let card = document.querySelectorAll('.stocks__card')

arr.map((el) => {
//   let li = document.createElement('li')
//   li.innerHTML = el.name
//   li.id = el.id
//   ul.append(li)
    
    
    ul.innerHTML +=`<div id='${el.id}' class="stocks__card">
                        <img src="img/Frame 176.png" alt="">
                        <p>Смартфон ${el.id} Apple iPhone 14 128GB</p>
                        <div class="price">
                            <p>84 999 ₽</p>
                            <s>87 999 ₽</s>
                        </div>
                        <div class="favorites">
                            <div class="favorites__top">
                                <span>В наличии</span>
                                <div class="favorites__icon"></div>
                            </div>
                            <button id='${el.id}'>В корзину</button>
                        </div>
                    </div>`

let btn = document.querySelectorAll('button')

        console.log(el.id);
// .addEventListener('click', (e) => {
//    if (+card.id === el.id) {  
//     arrCart = [...arrCart, el]
//     console.log(arrCart);

//     popup.innerHTML += el.name
//     
// }
// })
})
