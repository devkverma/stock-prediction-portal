
# 📈 Stock Prediction Portal

A full-stack web application for **stock price prediction** built with **Django REST Framework (DRF)** as the backend and **React** as the frontend. The project predicts stock prices based on historical Apple stock data, using a model trained on the past **10 years of stock history**.

🔗 **GitHub Repository**: [Stock Prediction Portal](https://github.com/devkverma/stock-prediction-portal)

---

## 🚀 Features

* **JWT Authentication**

  * Secure login & token-based authentication system.
* **Stock Price Prediction**

  * Predicts stock prices based on historical data.
* **User-Friendly Frontend**

  * Clean UI built with React for easy interaction.
* **Backend API**

  * RESTful endpoints built with DRF.
* **Data Source**

  * Stock data collected using [`yfinance`](https://pypi.org/project/yfinance/).

---



## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/devkverma/stock-prediction-portal.git
cd stock-prediction-portal
```

---

### 2️⃣ Backend Setup (DRF)

1. Navigate to the backend folder:

   ```bash
   cd backend-drf
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate   # On macOS/Linux
   venv\Scripts\activate      # On Windows
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Run the development server:

   ```bash
   python manage.py runserver
   ```

Backend will be live at: **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

### 3️⃣ Frontend Setup (React)

1. Open a new terminal and navigate to the frontend folder:

   ```bash
   cd frontend-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Frontend will be live at: **[http://localhost:3000/](http://localhost:5173/)**

---

## 🔑 Authentication Flow

* Login via frontend → Sends credentials to backend
* Backend verifies credentials → Returns **JWT Token**
* Token is stored in frontend → Used for authenticated API requests

---

## 📊 Model Training

* Data collected from **Yahoo Finance** using `yfinance`.
* Dataset: **10 years of Apple stock history** (`AAPL`).
* Model trained and integrated into the backend for predictions.

---

## 🛠️ Tech Stack

* **Frontend:** React, Axios, JWT handling
* **Backend:** Django REST Framework, djangorestframework-simplejwt
* **ML/Data:** yfinance, Pandas, Scikit-learn (or other libs if applicable)
* **Database:** SQLite (default, can be switched to PostgreSQL/MySQL)

---

