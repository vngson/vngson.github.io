# Son Vo Ngoc - Personal Portfolio

A modern, cyberpunk-inspired personal portfolio website showcasing my work as a Software Engineer. Built with vanilla HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Style-Cyberpunk-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Features

### Design
- **Cyberpunk/Blade Runner Theme** - Dark aesthetic with cyan (#00e5ff) and magenta (#ff0080) accent colors
- **Glitch Text Effect** - Animated name display with RGB split distortion
- **Neon Glow & Flicker** - Simulated neon lighting effects
- **Scanline & Vignette** - CRT-style visual overlays
- **Responsive Design** - Works seamlessly on all device sizes

### Sections
- **Home** - Animated hero section with glitch name effect and role typing animation
- **About** - Personal introduction and background
- **Skills** - Categorized display of programming languages, frameworks, and development tools
- **Experience** - Work history with detailed highlights and tech stacks
- **Projects** - Showcase of personal and professional projects
- **Contact** - Functional contact form with email integration

### Interactive Elements
- **Particle System** - Floating particles that react to mouse movement
- **Neural Mesh** - Animated canvas background with connected nodes
- **Magnetic Buttons** - Buttons that follow cursor movement
- **Scroll Reveal** - Elements animate into view as you scroll
- **Theme Toggle** - Switch between dark and light modes

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom animations, gradients, and responsive layouts
- **JavaScript (ES6+)** - Interactive features and animations
- **Font Awesome** - Iconography
- **Google Fonts** - Orbitron (cyberpunk), Poppins (body text)
- **EmailJS** - Contact form email service

## Project Structure

```
vngson.github.io/
├── assets/
│   ├── css/
│   │   ├── base.css          # Base styles and variables
│   │   ├── grid.css          # Grid layout system
│   │   ├── pages/
│   │   │   └── home.css      # Home page cyberpunk styles
│   │   └── responsive.css    # Responsive breakpoints
│   ├── images/               # Static images
│   ├── js/
│   │   ├── main.js           # Main JavaScript functionality
│   │   ├── theme.js          # Theme toggle logic
│   │   └── contact-form.js   # Contact form handling
│   └── fontawesome-*/        # Font Awesome icons
├── [CV] - Vo Ngoc Son.pdf    # Resume/CV
├── index.html                # Main HTML file
└── README.md                 # This file
```

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vngson/vngson.github.io.git
```

2. Navigate to the project directory:
```bash
cd vngson.github.io
```

3. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

4. Visit `http://localhost:8000` in your browser

## Configuration

### Contact Form

To enable email functionality, configure EmailJS:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Update the initialization in `index.html`:
```javascript
emailjs.init("YOUR_SERVICE_ID");
```

4. Update the send function:
```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
```

### Customization

**Colors** - Modify CSS variables in `base.css`:
```css
:root {
  --primary-color: #00e5ff;
  --secondary-color: #ff0080;
  --bg-dark: #0a0a0f;
}
```

**Glitch Effect** - Adjust in `pages/home.css`:
```css
.cyberpunk-name::before {
  color: #00e5ff; /* Cyan layer */
}
.cyberpunk-name::after {
  color: #ff0080; /* Magenta layer */
}
```

**Content** - Edit directly in `index.html`:
- Profile information
- Skills and technologies
- Experience and projects
- Contact details

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## Performance

- Optimized CSS animations using `transform` and `opacity`
- Lazy loading of off-canvas content
- Efficient particle system with requestAnimationFrame
- Minimal external dependencies

## Contributing

This is a personal portfolio project. Suggestions and improvements are welcome!

## License

This project is licensed under the MIT License.

## Author

**Son Vo Ngoc**
- GitHub: [@vngson](https://github.com/vngson)
- Email: sonvo1611@gmail.com
- Location: Kông Bơ La, Gia Lai, Vietnam

---

Built with passion and cyberpunk aesthetics. [View Live Demo](https://vngson.github.io)
