# 🍔 Swiggy Clone (Frontend)

A responsive and dynamic **Swiggy Clone** frontend application built using **React**, **Tailwind CSS**, and **Vite**. It simulates core features of the Swiggy food delivery platform, including top restaurants, food categories, and online delivery options. The data is fetched from a local mock API (`swiggy-api`) for seamless development.

---

## 📸 Screenshots

| Home Page | Categories | Online Delivery |
|-----------|------------|-----------------|
| ![Home]![image](https://github.com/user-attachments/assets/8258db27-34b0-4595-b711-772e1bec6e33)
 | ![Category]![image](https://github.com/user-attachments/assets/c41541e8-9872-4526-9480-030b1d850b32)
 | ![Online Delivery]![image](https://github.com/user-attachments/assets/485c8210-997f-45a1-938d-4a993caba99a)
 |

---

## 🚀 Features

- 📦 Component-based architecture with reusable components
- 🎨 Tailwind CSS for modern UI design
- ⚡ Fast Vite build tool
- 🧩 Mock API with `swiggy-api` for categories and restaurant data
- 📱 Fully responsive design
- 🖼️ Optimized images and assets

---

## 🧱 Project Structure

```
swiggy-clone/
├── public/
│   ├── images/               
│   ├── category.json         # Static category data
│   └── vite.svg
├── src/
│   ├── assets/               
│   ├── components/           # React components
│   │   ├── Card.jsx
│   │   ├── OnlineDelivery.jsx
│   │   ├── TopRes.jsx
│   │   ├── category.jsx
│   │   └── header.jsx
│   ├── App.jsx               # Main App component
│   ├── App.css
│   ├── index.css
│   └── main.jsx              # Entry point
├── swiggy-api/               # Local API server
│   ├── public/images/        # Local image hosting
│   ├── data/
│   │   ├── category.json
│   │   └── restaurantChains.json
│   └── index.js              # Express server
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Shahzaib-728/Swiggy-Clone.git
cd Swiggy-Clone
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Run the frontend**
```bash
npm run dev
```

4. **Start the backend mock API server**
```bash
cd swiggy-api
npm install
node index.js
```

5. **Open in browser**
```
Frontend=> eg: http://localhost:5000
API Server=> eg: http://localhost:3000
```

## ⭐️ Show Your Support

If you found this project helpful, please consider giving it a ⭐️ on GitHub!

```

