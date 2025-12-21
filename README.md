# 🩷 Khushi Dhir - Portfolio Website

A modern, interactive portfolio website showcasing my projects, skills, achievements, and professional journey as a Computer Science & Engineering student.

![Portfolio Preview](./src/assets/portfolio.png)

## ✨ Features

- **Interactive Design** - Expandable sections with smooth animations and transitions
- **Responsive Layout** - Fully optimized for mobile, tablet, and desktop devices
- **Project Showcase** - Detailed project cards with descriptions, features, and tech stacks
- **Contact Form** - Integrated EmailJS for direct messaging
- **Certificate Display** - Visual showcase of professional certifications
- **Resume Section** - View and download resume functionality
- **Analytics Integration** - Vercel Analytics for visitor tracking

## 🎨 Sections

1. **Hero Section** - Introduction with profile image and social links
2. **About Me** - Background, education, and professional overview
3. **Skills** - Comprehensive tech stack organized by category
4. **Projects** - 5 major projects with detailed information
5. **Achievements** - Competitive programming stats and hackathon recognition
6. **Education** - Academic background and qualifications
7. **Certificates** - Professional certifications with verification links
8. **Resume** - View and download options
9. **Contact** - Contact form with social media links

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **Form Handling:** EmailJS
- **Analytics:** Vercel Analytics
- **Build Tool:** Vite (recommended) or Create React App

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/khushidhir3/Portfolio-website.git
cd Portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start the development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 📧 EmailJS Configuration

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with variables: `from_name`, `reply_to`, `message`
4. Get your Service ID, Template ID, and Public Key
5. Update the credentials in the code or use environment variables

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── assets/
│   │   ├── profile.png
│   │   ├── about.png
│   │   ├── resumePreview.png
│   │   ├── portfolio.png
│   │   ├── MAD.jpg
│   │   ├── CT.jpg
│   │   ├── OOP.jpg
│   │   ├── DSA.jpg
│   │   └── JP.jpg
│   ├── Portfolio.jsx
│   └── main.jsx
├── public/
│   └── resume.pdf
├── package.json
└── README.md
```

## 🎯 Key Components

### Expandable Sections
- Click on "About Me", "Skills", "Achievements", "Education", "Certificates", or "Resume" to expand
- Smooth transitions with responsive design

### Project Cards
- Click on any project to view detailed information
- Features, tech stack, and links to GitHub/live demo

### Contact Form
- Real-time form validation
- EmailJS integration for direct messaging
- Success/error notifications

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` or `build` folder
3. Configure environment variables in Netlify

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎨 Color Palette

- Primary Dark: `#5C1F1F`
- Secondary: `#C4A5A0`
- Light Background: `#E8DDD3`
- Accent: `#A67B7B`

## 📊 Performance

- Optimized images for faster loading
- Lazy loading for sections
- Smooth animations with CSS transitions
- Minimal external dependencies

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Khushi Dhir**
- Email: dhir.khushi.2005@gmail.com
- LinkedIn: [linkedin.com/in/khushidhir3](https://www.linkedin.com/in/khushidhir3/)
- GitHub: [github.com/khushidhir3](https://github.com/khushidhir3)
- Phone: +91-6284827233

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first styling
- EmailJS for form handling
- Vercel for hosting and analytics
- React community for amazing resources

---

Made with 🩷 by Khushi Dhir