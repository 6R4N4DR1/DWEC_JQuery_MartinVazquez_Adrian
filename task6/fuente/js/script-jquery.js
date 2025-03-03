$(document).ready(function() {
    const $cardContainer = $('#card-container');
    let page = 1;
    let loading = false;

    const loadCards = async () => {
        if (loading) return;
        loading = true;
        const response = await fetch(`https://api.example.com/data?page=${page}`);
        const data = await response.json();
        data.items.forEach(item => {
            const $card = $(`
                <div class="card">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            `);
            $cardContainer.append($card);
        });
        page++;
        loading = false;
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadCards();
        }
    }, {
        rootMargin: '0px',
        threshold: 1.0
    });

    observer.observe(document.querySelector('#scroll-anchor'));

    loadCards();
});