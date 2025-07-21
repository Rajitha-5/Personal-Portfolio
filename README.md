# Rajitha Reddy • Portfolio

Welcome to my personal portfolio—a responsive, full-stack web experience showcasing skills, projects, and professional growth.

---

## 🚀 Features

- **Dark/Pink Theme Toggle** — Easily switch between light and dark modes for a personalized experience.
- **Interactive Tabbed Sections** — Navigate through **Skills**, **Experience**, and **Education** in a streamlined format.
- **Downloadable CV** — Directly download my resume via a one-click button.
- **Contact Form** — Secure form that stores submissions in a MySQL database for efficient lead collection.
- **Social Profiles** — Clickable icons link to LinkedIn, HackerRank, LeetCode, Unstop, and more.
- **Projects Gallery** — Featuring Credit Fraud Detection, Medical Assistant App, and Events Webpage with hover-over overlays and demo links.

---

## 🛠 Tech Stack

- **Frontend:** HTML5 | CSS3 | JavaScript
- **Styling & Icons:** Remixicon, ScrollReveal
- **Backend:** Node.js | Express.js
- **Database:** MySQL (via `mysql2` connector)
- **Config & APIs:** dotenv, body-parser, cors
- **Deployment:** Served statically from `public/`

---

## 📂 Project Structure

root/
├── public/ # Frontend code (HTML, CSS, images, JS)
│ └── index.html
├── server.js # Express backend + contact form handler
├── .env # Secrets (DB_HOST, DB_USER, etc.)
└── styles.css # Custom CSS with theme toggling

yaml
Copy
Edit

---

## ⚙️ Local Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/Rajitha-5/Personal-Portfolio.git
   cd Personal-Portfolio
Install dependencies:

bash
Copy
Edit
npm install express mysql2 body-parser cors dotenv
Create a .env file with:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
Start the server:

bash
Copy
Edit
node server.js
Visit http://localhost:3000 to view your live portfolio locally.

💡 Usage & Workflow
CV Download: Click the “Download CV” button to receive a PDF of my resume.

Contact Form: Fill out your name, mobile, email, and message—entries are saved to the MySQL contact_form table.

Social Links: Icons in the footer redirect to live profiles in a new tab (target="_blank").

Projects: Each portfolio card includes overlay and demo link for deeper insights.

👁️‍🗨️ What You’ll See
A clean, modern landing page with thematic customization.

A tabbed section to highlight technical & soft skills, professional experience, and academic background.

A project gallery with hover-activated view buttons for live demos or GitHub repos.

Fully functional backend integration with database connectivity.

💫 Future Enhancements
Add filtering to Projects gallery

Integrate a Lightbox feature for project images

Implement Email notifications for new form submissions

🧷 Connect with Me
LinkedIn: Rajitha Reddy

GitHub: Rajitha-5

LeetCode & HackerRank profiles: Available via portfolio footer icons.

📝 License
This project is open source under the MIT License.

Feel free to explore, fork, and get in touch!

yaml
Copy
Edit

---

### ✅ Why It Works

- **Feature-first structure** clearly states what sets your portfolio apart.
- Tech stack and setup steps make it easy for others to run or contribute.
- Highlights interactivity (download, forms, redirects) and database integration.
- Professional tone with clean formatting—ideal for recruiters and developers reviewing your code.

Let me know if you'd like to adjust the wording, add status badges, or include live screenshot GIFs!
::contentReference[oaicite:0]{index=0}
