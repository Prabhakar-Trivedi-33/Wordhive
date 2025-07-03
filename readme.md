# WordHive - Online Bookstore 📚

A modern, responsive online bookstore built with vanilla HTML, CSS, and JavaScript. Discover your next great read with an intuitive interface and smooth user experience.

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Categories**: Browse books by genre with smooth animations
- **Search Functionality**: Find books by title, author, or genre
- **Shopping Cart**: Add books to cart with real-time counter updates
- **Smooth Animations**: Beautiful hover effects and transitions
- **Modern UI**: Clean, contemporary design with gradient backgrounds
- **Book Management**: Dynamic book display with filtering capabilities

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/wordhive-bookstore)

## 📱 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile.png)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Interactive functionality
- **CSS Variables**: Consistent theming
- **CSS Animations**: Smooth transitions and effects

## 📋 Project Structure

```
wordhive-bookstore/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── screenshots/        # Project screenshots
    ├── desktop.png
    └── mobile.png
```

## 🏃‍♂️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wordhive-bookstore.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd wordhive-bookstore
   ```

3. **Open in your browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server like Live Server extension in VS Code

### Alternative: Download ZIP

1. Click the "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the files
4. Open `index.html` in your browser

## 🎨 Customization

### Adding New Books

Edit the `books` array in `script.js`:

```javascript
const books = [
    {
        id: 9,
        title: "Your Book Title",
        author: "Author Name",
        genre: "fiction", // fiction, mystery, romance, scifi, biography, selfhelp
        price: 24.99,
        rating: 4.5,
        cover: "📖" // Use any emoji or replace with image URL
    },
    // ... other books
];
```

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2C3E50;    /* Main color */
    --secondary-color: #E74C3C;  /* Accent color */
    --accent-color: #F39C12;     /* Highlight color */
    --text-color: #34495E;       /* Text color */
    --light-bg: #ECF0F1;         /* Light background */
    --white: #FFFFFF;            /* White */
}
```

### Adding New Categories

1. Add a new category card in `index.html`:
```html
<div class="category-card" onclick="filterBooks('yourcategory')">
    <span class="category-icon">📖</span>
    <h3>Your Category</h3>
    <p>Category description</p>
</div>
```

2. Add books with the new genre in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

## 🌟 Key Features Explained

### Search Functionality
- Real-time search as you type
- Searches through book titles, authors, and genres
- Case-insensitive matching

### Category Filtering
- Click any category to filter books by genre
- Smooth scroll to filtered results
- Visual feedback with hover animations

### Shopping Cart
- Add books to cart with one click
- Real-time cart counter updates
- Success notifications with animations

### Animations
- Bounce effect on logo
- Hover effects on cards and buttons
- Slide-in notifications
- Smooth page scrolling

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📈 Future Enhancements

- [ ] User authentication system
- [ ] Wishlist functionality
- [ ] Book reviews and ratings
- [ ] Advanced filtering options
- [ ] Payment integration
- [ ] Backend database integration
- [ ] User profiles and order history

## 🤝 Contributing

Contributions are welcome! Here's how you can help:
