 Random GIF Generator
A simple web app that fetches and displays a random GIF using the Giphy API. Refresh or click a button to get a new GIF every time!

📸 Demo
![Screenshot 2025-07-09 205709](https://github.com/user-attachments/assets/4a1668ce-3d58-4f19-9181-0ff85b0e58fa)


🚀 Features
Fetches a random GIF from Giphy

Click a button to generate a new one

Simple and responsive UI

Fun and fast!

🛠️ Built With
React.js (or plain HTML/CSS/JavaScript)

Axios or fetch() for API requests

Giphy API

📦 Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/random-gif-generator.git
cd random-gif-generator

# Install dependencies (if using React)
npm install

# Start the development server
npm start
🔑 Giphy API Key Setup
Go to https://developers.giphy.com/

Create a free account and get your API key

Add it to your .env file (if using React):

env
Copy
Edit
REACT_APP_GIPHY_API_KEY=your_api_key_here

};
📁 Project Structure

📦 random-gif-generator
┣ 📁 public
┣ 📁 src
┃ ┣ 📄 App.js
┃ ┣ 📄 GifDisplay.js
┃ ┗ 📄 styles.css
┣ 📄 .env
┣ 📄 README.md
┗ 📄 package.json
✨ Screenshots



🙌 Contributing
Contributions are welcome!
Feel free to open an issue or pull request.

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
