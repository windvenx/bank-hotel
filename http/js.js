// let ul = document.querySelector('ul')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data)=>data.json())
// .then((json)=>{
     
//     json.map((el)=>{
//         ul.innerHTML += `<li>${el.id}</li>`
//     })
// })


// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body:JSON.stringify(user),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
// .then((res)=>res.json())
// .then((json)=>console.log(json))



    let sideNavigator = document.querySelector('.cards')

    let func = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json) => {
            json.map((el) => {
              sideNavigator.innerHTML += `<a href="oneProduct.html#${el.id}"><li>
              <img src="${el.image}" alt="Image">
              <div> Title: ${el.title}</div>
              <div> Price : ${el.price}</div> 
              <div> Description: ${el.description}</div>
              </li>
              </a>`
            
          })
        })
    }
    func()





