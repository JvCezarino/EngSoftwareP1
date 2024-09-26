let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let items = document.querySelectorAll('.itemp');
let currentIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

next.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

prev.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Inicializa mostrando o primeiro item
showItem(currentIndex);
