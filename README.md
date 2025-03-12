# Three.js Project Setup

## 🎉 Welcome to Your Three.js Project!

This project uses **Three.js** to create amazing 3D experiences on the web. Follow the steps below to set everything up and start building!

---

## 🚀 Prerequisites

Make sure you have **Node.js** installed. This project requires **Node.js v18** or higher.

### Check your Node.js version
```bash
node -v
```
If your version is lower than 18, update Node.js:

#### For macOS (Homebrew)
```bash
brew upgrade node
```

#### Or use **nvm** (Node Version Manager)
```bash
nvm install 18
nvm use 18
```

---

## 🔧 Project Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies
We use **Yarn** to manage packages.
```bash
npx yarn
```
If you don't have Yarn installed yet, run:
```bash
npm install -g yarn
```

---

## 🛠️ Start the Development Server
```bash
npx vite
```
By default, this will start a local server at `http://localhost:5173/`.

If you want to specify a custom port, run:
```bash
npx vite --port 3001
```

---

## 📁 Project Structure
```
📦 your-project-folder
├── 📁 public            # Static assets (e.g., textures, models)
├── 📁 src
│   ├── 📄 main.js        # Entry point
│   ├── 📄 scene.js       # Scene setup
│   └── 📄 utils.js       # Helper functions
├── 📄 index.html
└── 📄 vite.config.js     # Vite configuration
```

---

## ✨ Features
- 🌟 Three.js scene setup
- 🛠️ Easy development with Vite
- 🔥 Hot reload
- 💻 Supports Node.js 18+

---

## 📌 Notes
- Ensure you always run the project with Node.js **v18** or higher.
- If `npx yarn` fails, double-check your Node version.

---

## 🎯 Roadmap
- [ ] Add interactive camera controls
- [ ] Load 3D models (GLTF/OBJ)
- [ ] Implement basic animations
- [ ] Deploy with Vercel/Netlify

Happy coding! 🚀

