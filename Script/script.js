let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemp')
    document.querySelector('.slidep').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemp')
    document.querySelector('.slidep').prepend(items[items.length - 1])
})

