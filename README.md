# ICCCA 2026 - Conference Website

A modern, interactive, and responsive website for the International Conference on Contemporary Catalysis and Applications (ICCCA 2026).

## Features

### 🎨 Design & UI/UX
- **Modern & Professional Design**: Clean layout with a green color scheme matching the conference theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions throughout the site
- **Interactive Elements**: Hover effects, click animations, and dynamic content

### 📱 Sections

1. **Hero Section**: Eye-catching introduction with conference details and call-to-action buttons
2. **About Section**: Comprehensive information about the conference with statistics
3. **Scope Section**: Detailed topics covered in the conference with icon-based cards
4. **Important Dates**: Timeline view of key conference dates
5. **Registration**: Interactive pricing tables with early bird and regular pricing options
6. **Abstract Submission**: Guidelines and submission form with word counter
7. **Committee**: Organizing committee members with profile cards
8. **Venue**: Location information with embedded Google Maps
9. **Contact**: Contact details and payment information

### ⚡ Interactive Features

- **Sticky Navigation**: Navigation bar that follows as you scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Link Highlighting**: Automatic highlighting of current section in navigation
- **Pricing Toggle**: Switch between early bird and regular pricing
- **Word Counter**: Real-time word count for abstract submission
- **Scroll to Top**: Quick button to return to the top of the page
- **Animated Statistics**: Numbers that animate when scrolled into view
- **Parallax Effects**: Subtle depth effect on hero section

## Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (Vanilla)**: No framework dependencies, pure JavaScript for interactions
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Poppins font family for clean typography

## File Structure

```
website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Installation & Usage

1. **Download the files**: Download all three files (index.html, styles.css, script.js) to the same folder

2. **Open the website**: Simply open `index.html` in any modern web browser
   - Chrome (recommended)
   - Firefox
   - Safari
   - Edge

3. **No server required**: This is a static website that works directly from the file system

## Customization Guide

### Colors

Edit the CSS variables in `styles.css` (lines 14-24):

```css
:root {
    --primary-color: #1a472a;      /* Main green color */
    --secondary-color: #2d6e45;    /* Secondary green */
    --accent-color: #4a9960;       /* Accent green */
    --dark-color: #0f2419;         /* Dark background */
    --light-color: #f5f9f7;        /* Light background */
    /* ... */
}
```

### Content

- **Conference Details**: Edit the hero section in `index.html` (lines 65-110)
- **About Text**: Modify the about section (lines 112-180)
- **Scope Topics**: Update scope cards (lines 182-340)
- **Dates**: Change timeline items (lines 342-400)
- **Pricing**: Adjust pricing cards (lines 402-600)
- **Committee**: Update committee members (lines 750-850)

### Images

Replace placeholder images:
- Logo: Update the `src` attribute in line 28 of `index.html`
- Add committee photos by replacing the icon placeholders

### Contact Information

Update contact details in the contact section (lines 950-1050):
- Email address
- Website URLs
- Bank account details
- Physical address

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

**Note**: Internet Explorer is not supported due to modern CSS and JavaScript features.

## Performance

- **Fast Loading**: Minimal external dependencies
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Lazy Loading**: Images and content load as needed
- **Smooth Scrolling**: 60fps scroll performance

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios
- Responsive font sizes

## SEO Features

- Meta tags for search engines
- Semantic HTML structure
- Descriptive alt texts (add your own)
- Clean URL structure

## Future Enhancements

Potential additions you can make:
- [ ] Backend integration for form submissions
- [ ] Speaker profiles section
- [ ] Schedule/agenda page
- [ ] Photo gallery
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Social media feed integration

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push the files to the main branch
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Site will be live instantly with a custom URL

### Traditional Hosting
1. Upload files via FTP to your web server
2. Ensure index.html is in the root directory
3. Access via your domain name

## Support & Credits

**Created for**: ICCCA 2026 - International Conference on Contemporary Catalysis and Applications

**Organized by**: ICUS, Mahatma Gandhi University, Kottayam, Kerala, India

**Design Inspiration**: SMS-3 2026 website structure

---

## License

This website template is created for ICCCA 2026. Feel free to modify and use it for your conference or event.

## Contact

For technical issues or questions about the website:
- Email: iccca@gmail.com
- Website: https://icus.mg.ac.in/iccca2026

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Status**: Production Ready ✅

