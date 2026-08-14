// Global variables
let currentPage = 'home';
const pageContent = document.getElementById('pageContent');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');

// Get current page from URL
function getCurrentPage() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page.includes('index')) return 'home';
    if (page.includes('tutorials')) return 'tutorials';
    if (page.includes('news')) return 'news';
    if (page.includes('community')) return 'community';
    if (page.includes('login')) return 'login';
    if (page.includes('signup')) return 'signup';
    return 'home';
}

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Search functionality
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length === 0) return;

    const tutorialResults = tutorials.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );

    const newsResults = newsArticles.filter(n =>
        n.title.toLowerCase().includes(query) ||
        n.description.toLowerCase().includes(query)
    );

    const results = [
        ...tutorialResults.map(t => ({ ...t, type: 'tutorial' })),
        ...newsResults.map(n => ({ ...n, type: 'news' }))
    ];

    if (results.length === 0) {
        document.getElementById('searchResults').innerHTML = `
            <div class="no-results">
                <p>No results found for "${query}"</p>
                <p>Try searching with different keywords</p>
            </div>
        `;
    } else {
        document.getElementById('searchResults').innerHTML = results.map(item => `
            <div class="search-result-card">
                <span class="search-result-type">${item.type === 'tutorial' ? item.badge : item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.type === 'tutorial' ? 
                    `<button class="btn btn-sm" onclick="viewTutorial(${item.id})">Read Tutorial</button>` : 
                    `<a href="${item.sourceUrl}" target="_blank" class="btn btn-sm">Read More</a>`
                }
            </div>
        `).join('');
    }

    searchModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

closeSearch.addEventListener('click', () => {
    searchModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Tutorial functions
function viewTutorial(id) {
    localStorage.setItem('selectedTutorial', id);
    window.location.href = 'tutorials.html#tutorial-' + id;
}

// Form submission handlers
document.addEventListener('submit', function(e) {
    if (e.target.closest('form')) {
        e.preventDefault();
        const form = e.target;
        alert('Thank you! Your ' + (form.id || 'form') + ' has been submitted successfully.');
        form.reset();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('Techy website loaded successfully! 🚀');
