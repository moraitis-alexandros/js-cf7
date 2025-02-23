const container = document.querySelector('#container')
const btn = document.getElementById('btn')
    container.innerHTML = 'Koukou'
btn.addEventListener('click', function(){
    container.classList.toggle('container')
    container.classList.toggle('text-center')
})




