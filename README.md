# 🎯 Animated Skill/Progress Bars

An interactive and responsive skills section built using **HTML5, CSS3, and JavaScript**. This project features smooth animated progress bars that fill to their target percentages when the skills section enters the viewport.

## ✨ Features

- 📊 **Five Skill Bars** — HTML, CSS, JavaScript, Responsive Design, and Git & GitHub.
- 🎬 **Smooth Animations** — Progress bars fill smoothly using CSS transitions.
- 👀 **Scroll Detection** — Uses the JavaScript `IntersectionObserver` API to trigger animations when the section becomes visible.
- ⏱️ **Staggered Animation** — Each bar starts with a slight delay for a polished effect.
- 📱 **Responsive Design** — Adapts to desktop, tablet, and mobile screens.
- 🎨 **Modern UI** — Dark background, colorful gradients, and rounded progress bars.
- ♿ **Reduced Motion Support** — Respects users' reduced-motion preferences.
- 🚀 **Lightweight** — No external libraries or frameworks required.

## 🛠️ Technologies Used

- **HTML5** — Structures the skills section and progress bars.
- **CSS3** — Provides styling, gradients, responsive layouts, and transitions.
- **JavaScript** — Detects section visibility and controls animation timing.

## 📂 Project Structure

```
animated-skill-bars/
│
├── index.html    # HTML structure
├── style.css     # Styling and animations
└── script.js     # Animation logic
```

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/animated-skill-bars.git
```

### 2. Navigate to the Project Folder

```
cd animated-skill-bars
```

### 3. Run the Project

Open `index.html` in your browser.

You can also use the **Live Server** extension in Visual Studio Code for a convenient development experience.

## ⚙️ How It Works

### 1. HTML Data Attributes

Each progress bar contains a `data-progress` attribute that defines its target width.

```
<div class="progress-bar html" data-progress="90"></div>
```

### 2. CSS Transitions

The CSS transition creates the smooth filling animation.

```
.progress-bar {
    width: 0;
    height: 100%;
    transition: width 1.5s ease-in-out;
}
```

### 3. JavaScript IntersectionObserver

The `IntersectionObserver` API detects when the skills section becomes visible. JavaScript then sets each bar's width to its target percentage.

```
bar.style.width = bar.dataset.progress + "%";
```

### 4. Staggered Animation

The `setTimeout()` function adds a small delay between the animations, making each bar fill one after another.

## 🎨 Customization

### Change Skill Names and Percentages

Edit the skill label, percentage text, and `data-progress` value in `index.html`.

```
<div class="skill-info">
    <span>Python</span>
    <span class="percentage">80%</span>
</div>

<div class="progress-track">
    <div class="progress-bar" data-progress="80"></div>
</div>
```

### Change Animation Speed

Update the transition duration in `style.css`.

```
transition: width 2s ease-in-out;
```

### Change Progress Bar Colors

Use a CSS gradient or a solid color.

```
.progress-bar {
    background: linear-gradient(90deg, #06b6d4, #3b82f6);
}
```


## 📚 Learning Objectives

This project helps you practice:

- CSS transitions and animation timing.
- JavaScript DOM manipulation.
- HTML `data-*` attributes.
- The `IntersectionObserver` API.
- The `setTimeout()` function.
- Responsive web design.
- Basic accessibility considerations.

## 🔮 Future Improvements

- Add animated percentage counters.
- Add more skills dynamically using JavaScript.
- Add different animation styles.
- Include light and dark themes.
- Allow users to choose custom skill percentages.

## 📖 Resources

- [MDN — CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN — HTML Data Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes)

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

