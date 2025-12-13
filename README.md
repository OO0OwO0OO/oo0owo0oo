# Personal Portfolio Website

A modern, responsive personal portfolio website built with Jekyll, HTML, CSS, and JavaScript.

## Features

- **Home Page**: Profile photo and introduction
- **About Page**: Background, qualifications, and activities
- **Projects Page**: Showcase of projects including Project 1 and Hour of Code
- **Resume Page**: Professional resume and skills
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Navigation Bar**: Sticky navigation with mobile hamburger menu
- **Footer**: Quick links, social media icons, and repository link

## Technology Stack

- **Jekyll**: Static site generator
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and mobile navigation
- **Font Awesome**: Icons

## Setup Instructions

### Prerequisites

- Ruby (2.7 or higher)
- Bundler gem

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/oo0owo0oo.git
cd oo0owo0oo
```

2. Install dependencies:
```bash
bundle install
```

3. Build and serve locally:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000`

## Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- GitHub and Codecademy usernames
- Repository URL
- Navigation items

## Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Default page layout
├── _includes/
│   ├── navbar.html      # Navigation bar component
│   └── footer.html      # Footer component
├── css/
│   └── style.css        # Main stylesheet
├── js/
│   └── main.js          # JavaScript functionality
├── images/              # Image assets
├── index.html           # Home page
├── about.html           # About page
├── projects.html        # Projects page
├── resume.html          # Resume page
└── README.md            # This file
```

## Adding Images

Place your images in the `images/` directory:
- `profile.jpg` - Profile photo for home page
- `project1.jpg` - Screenshot for Project 1
- `project2.jpg` - Screenshot for Hour of Code project
- `project3.jpg` - Additional project screenshots

## GitHub Pages Deployment

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as source
4. Your site will be available at `https://yourusername.github.io/oo0owo0oo`

## Customization

### Update Social Links

Edit `_config.yml`:
```yaml
github_username: yourusername
codecademy_username: yourusername
repository_url: https://github.com/yourusername/oo0owo0oo
```

### Add New Pages

1. Create a new HTML file in the root directory
2. Add front matter:
```yaml
---
layout: default
title: Page Title
---
```
3. Add content below the front matter
4. Add navigation link in `_config.yml`

## License

This project is open source and available for educational purposes.

## Credits

Built for SITE 1101: Principles of Information Systems course project.

