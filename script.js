// Sample book data - in real app, this would come from MongoDB
const books = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "fiction",
        price: 24.99,
        rating: 4.5,
        cover: "📚"
    },
    {
        id: 2,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "mystery",
        price: 19.99,
        rating: 4.2,
        cover: "🔍"
    },
    {
        id: 3,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "romance",
        price: 22.99,
        rating: 4.7,
        cover: "💕"
    },
    {
        id: 4,
        title: "Dune",
        author: "Frank Herbert",
        genre: "scifi",
        price: 27.99,
        rating: 4.8,
        cover: "🚀"
    },
    {
        id: 5,
        title: "Educated",
        author: "Tara Westover",
        genre: "biography",
        price: 26.99,
        rating: 4.6,
        cover: "👤"
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "selfhelp",
        price: 23.99,
        rating: 4.9,
        cover: "💪"
    },
    {
        id: 7,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "mystery",
        price: 21.99,
        rating: 4.3,
        cover: "🔍"
    },
    {
        id: 8,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "scifi",
        price: 25.99,
        rating: 4.5,
        cover: "🚀"
    }
];

let cart = [];
let filteredBooks = [...books];

// Display books
function displayBooks(booksToShow = books) {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';
    
    booksToShow.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-image">
                ${book.cover}
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${book.author}</div>
                <div class="book-genre">${book.genre.toUpperCase()}</div>
                <div class="book-price">$${book.price}</div>
                <button class="add-to-cart" onclick="addToCart(${book.id})">
                    Add to Cart
                </button>
            </div>
        `;
        booksGrid.appendChild(bookCard);
    });
}

// Filter books by category
function filterBooks(genre) {
    filteredBooks = books.filter(book => book.genre === genre);
    displayBooks(filteredBooks);
    
    // Scroll to books section
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm === '') {
                displayBooks(books);
                return;
            }
            
            const searchResults = books.filter(book => 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.genre.toLowerCase().includes(searchTerm)
            );
            
            displayBooks(searchResults);
        });
    }
});

// Add to cart functionality
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    
    updateCartCount();
    showNotification(`"${book.title}" added to cart! 🎉`);
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
        font-weight: bold;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
