    const images_array = [
        '01.jpg',
        '02.jpg',
        '03.jpg',
        '04.jpg',
        '05.jpg',
    ];

    const items_slider = document.querySelector('.item-slider');
    const items_thumbnails = document.querySelector('.item-thumbnails');

    // Popola il carosello con le immagini
    images_array.forEach((image, index) => {
        items_slider.innerHTML += `<div class="item" data-index="${index}"><img src="./img/${image}"></div>`;
        items_thumbnails.innerHTML += `<div class="thumb" data-index="${index}"><img src="./img/${image}"></div>`;
    });

    // Aggiungi classe 'active' al primo elemento
    items_slider.querySelector('.item').classList.add('active');
    items_thumbnails.querySelector('.thumb').classList.add('active');

    // Gestisci il cambio di immagine quando si fa clic su una miniatura
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            changeImage(index);
        });
    });

    // Aggiungi gestore di eventi per pulsanti Next e Prev
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click', function () {
        const currentIndex = parseInt(items_slider.querySelector('.item.active').getAttribute('data-index'));
        const newIndex = (currentIndex + 1) % images_array.length;
        changeImage(newIndex);
        resetTimer();
    });

    prev.addEventListener('click', function () {
        const currentIndex = parseInt(items_slider.querySelector('.item.active').getAttribute('data-index'));
        const newIndex = (currentIndex - 1 + images_array.length) % images_array.length;
        changeImage(newIndex);
        resetTimer();
    });

    // Imposta il timer per cambiare automaticamente immagine ogni 3 secondi
    let timer = setInterval(function () {
        const currentIndex = parseInt(items_slider.querySelector('.item.active').getAttribute('data-index'));
        const newIndex = (currentIndex + 1) % images_array.length;
        changeImage(newIndex);
    }, 3000);

    // Funzione per cambiare l'immagine in base all'indice
    function changeImage(index) {
        items_slider.querySelector('.item.active').classList.remove('active');
        items_slider.querySelector(`.item[data-index="${index}"]`).classList.add('active');

        items_thumbnails.querySelector('.thumb.active').classList.remove('active');
        items_thumbnails.querySelector(`.thumb[data-index="${index}"]`).classList.add('active');
    }

    // Funzione per resettare il timer
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(function () {
            const currentIndex = parseInt(items_slider.querySelector('.item.active').getAttribute('data-index'));
            const newIndex = (currentIndex + 1) % images_array.length;
            changeImage(newIndex);
        }, 3000);
    };


    