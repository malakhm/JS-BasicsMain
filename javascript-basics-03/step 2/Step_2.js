document.addEventListener('DOMContentLoaded', function () {
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');

    const txt = document.getElementById('texte');

    show.addEventListener('click', function () {
        txt.style.display = 'block';
    });

    hide.addEventListener('click', function () {
        txt.style.display = 'none';
    });
})


