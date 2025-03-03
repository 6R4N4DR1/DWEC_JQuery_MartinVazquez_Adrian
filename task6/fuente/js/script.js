document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    let page = 1;
    let loading = false;

    const loadCards = async () => {
        if (loading) return;
        loading = true;
        const response = await fetch(`https://api.example.com/data?page=${page}`);
        const data = await response.json();
        data.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            `;
            cardContainer.appendChild(card);
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