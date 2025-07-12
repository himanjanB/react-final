# 🧑‍💻 Himanjan Bora – Developer Portfolio

A modern, responsive, and minimal personal portfolio built using **React.js** and **Tailwind CSS**, showcasing technical skills, projects, and contact details. The site is designed to serve as a central hub for recruiters, collaborators, and clients to view my work, download my CV, and get in touch.

---

## 🚀 Features

- 🧭 Smooth section navigation with animated scroll
- 🎨 Beautiful glassmorphism and gradient-based UI
- 💼 Dynamic project showcase and tech stack
- 📄 Resume download with a single click
- 📱 Fully responsive for mobile, tablet, and desktop
- 🧠 Tech stack and projects fetched from backend API (optional)
- 📦 Easily extensible and maintainable code

---

## 📸 Preview

[Himanjan Portfolio.pdf](public/Himanjan%20Portfolio.pdf)

---

## 🏗️ Project Structure

react-final/
├── client/                  # React frontend (your portfolio UI)
│   ├── public/
│   │   └── profile.jpg      # Your profile image
│   ├── src/
│   │   ├── components/      # UI components (optional separation)
│   │   └── App.tsx          # Main entry component (TechPortfolio)
│   └── package.json
│
├── server/                  # Express backend for skills & projects API
│   ├── controllers/         # API logic for handling requests
│   ├── routes/              # Route definitions
│   ├── services/            # Supabase integration
│   ├── .env                 # Supabase keys (not checked in)
│   └── index.js             # Express app entry
│
└── README.md                # Project documentation

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **TypeScript** (optional, if enabled)
- **Tailwind CSS**
- **Lucide Icons**

### Backend
- **Node.js** with **Express.js**
- **Supabase** (hosted PostgreSQL DB with REST API)
- **CORS** / **dotenv**

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/himanjanbora/react-final.git
cd react-final

2. Install dependencies

For frontend:

cd client
npm install

For backend:

cd ../server
npm install

3. Set up Supabase
	•	Go to https://supabase.com and create a project.
	•	Create tables:
	•	skills (id, name, level, category)
	•	projects (id, title, description, tech[], github, demo)
	•	Populate initial data through SQL or UI.
	•	Get your SUPABASE_URL and SUPABASE_KEY.

4. Create .env file in /server/

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key

5. Run the development servers

Backend

cd server
node index.js

Frontend

cd client
npm start

Visit: http://localhost:3000

⸻

📁 API Endpoints

Endpoint	Method	Description
/api/skills	GET	Fetch list of skills
/api/projects	GET	Fetch list of projects


⸻

📄 Resume

The resume is downloadable via a button on the landing page. File must be placed in the public/ directory:

client/public/Resume_Himanjan Bora.pdf


⸻

📤 Deployment

You can deploy this project using:
	•	Frontend: Vercel, Netlify, or GitHub Pages
	•	Backend: Render, Railway, or Supabase Edge Functions
	•	Database: Supabase (free tier)

⸻

🧠 Future Improvements
	•	Add contact form with Supabase or EmailJS integration
	•	Admin panel to manage skills and projects dynamically
	•	Support blog articles or project write-ups
	•	Internationalization support

⸻

🙋‍♂️ About Me

I’m Himanjan Bora, a passionate Salesforce developer with a keen interest in full-stack engineering, AI, and trading. I created this portfolio to showcase my technical skills, past work, and to connect with fellow developers and collaborators.

⸻

📬 Contact
	•	Email: your.email@example.com
	•	LinkedIn: [Your LinkedIn URL]
	•	GitHub: [Your GitHub URL]

⸻

📜 License

This project is open source and available under the MIT License.