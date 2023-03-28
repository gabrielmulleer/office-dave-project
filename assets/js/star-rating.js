const stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', evento)
function evento(e) {
    const classStar = e.target.classList;
    if (!classStar.contains('ativo')) {
        stars.forEach(element => {
            element.classList.remove('ativo');
        });
        classStar.add('ativo');
        console.log(e.target.getAttribute('data-rating'))
    }
};