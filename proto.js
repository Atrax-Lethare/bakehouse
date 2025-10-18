document.addEventListener('DOMContentLoaded', () => {

    // --- Search Bar Suggestions ---
    const searchBar = document.getElementById('search-bar');
    const suggestionsBox = document.getElementById('suggestions-box');
    
    const suggestions = [
        'Velvet Chocolate Cake', 'Buttery Croissants', 'Assorted Cookies', 
        'Strawberry Dream Pastry', 'Artisanal Sourdough', 'Blueberry Muffins',
        'Cinnamon Rolls', 'Cheesecake', 'Red Velvet Cupcakes', 'Baguette'
    ];

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        suggestionsBox.innerHTML = '';
        if (query.length > 0) {
            const filteredSuggestions = suggestions.filter(item => 
                item.toLowerCase().includes(query)
            );

            if (filteredSuggestions.length > 0) {
                filteredSuggestions.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = item;
                    div.addEventListener('click', () => {
                        searchBar.value = item;
                        suggestionsBox.style.display = 'none';
                    });
                    suggestionsBox.appendChild(div);
                });
                suggestionsBox.style.display = 'block';
            } else {
                suggestionsBox.style.display = 'none';
            }
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    // Hide suggestions box when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target !== searchBar) {
            suggestionsBox.style.display = 'none';
        }
    });

    // --- Testimonial Slider ---
    const slider = document.getElementById('testimonial-slider');
    const track = document.getElementById('testimonial-track');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider && track) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Multiplier for faster scroll
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});