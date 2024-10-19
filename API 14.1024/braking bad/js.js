let btn = document.querySelector('button')
let a = document.querySelector('div')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
  .then(response => response.json())
  .then(commits => {
    console.log(commits);
    let r = commits[0]
    a.innerHTML = `<p>${r.quote}</p><p>${r.author}</p>`
    
  })
})
  