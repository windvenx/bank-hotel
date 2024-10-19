// let btn = document.querySelector('button')
// let a = document.querySelector('div')
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     fetch('https://api.openverse.org/v1/images/?format=json&q=dog')
//   .then(response => response.json())
//   .then(commits => {
//     console.log(commits);
//     commits.results.forEach(el => {
//         console.log(el)
//         a.innerHTML = `<img src="${el.url}" alt="${el.title}">`
//     });
//   })
// })
  

let btn = document.querySelector('button');
let a = document.querySelector('div');

let images = []; // Массив для хранения загруженных изображений
let currentIndex = 0; 

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (images.length === 0) {
        fetch('https://api.openverse.org/v1/images/?format=json&q=dog')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                images = data.results; 
                displayImage();
            })
            .catch(error => console.error('Error fetching images:', error));
    } else {
        
        displayImage();
    }
});

function displayImage() {
    if (currentIndex < images.length) {
        const el = images[currentIndex];
        a.innerHTML = `<img src="${el.url}" alt="${el.title}">`; 
        currentIndex++; 
    } else {
        a.innerHTML = '<p>No more images!</p>';
    }
}