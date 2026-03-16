🫀 Hypertension Predictor

A high-performance machine learning web application designed for cardiovascular risk assessment. This platform utilizes a Logistic Regression model to classify hypertension severity and provide real-time clinical recommendations through a modern, responsive interface.

📸 Interface Preview

<img width="1340" height="1004" alt="image" src="https://github.com/user-attachments/assets/b3ba85ca-7217-4844-b0d9-3ae66a33aa24" />

<img width="1410" height="1019" alt="image" src="https://github.com/user-attachments/assets/a32def71-087d-4c9f-a6a4-e253a9823e40" />
<img width="1244" height="1011" alt="Screenshot 2026-03-16 234629" src="https://github.com/user-attachments/assets/738429f1-bc56-4f14-9b07-6a0aa9bfdff0" />


<img width="1255" height="1007" alt="image" src="https://github.com/user-attachments/assets/0f796432-3da5-443a-82f6-ef358f479117" />
<img width="1279" height="1013" alt="image" src="https://github.com/user-attachments/assets/90bb34a6-39b3-4e63-8736-fe29061a9338" />



🚀 Key Features

Real-time Analysis: Instant classification of BP risk levels using optimized ML weights.

Modern UI/UX: A glass-morphism aesthetic built with pure CSS and smooth JS animations.

Clinical Triage: Categorizes risk into Normal, Stage 1, Stage 2, or Crisis.

Responsive Design: Fully optimized for desktop, tablet, and mobile viewing.

🛠️ Tech Stack

Layer

Technologies

Backend

Python, Flask

Machine Learning

Scikit-Learn, Joblib, NumPy, Pandas

Frontend

HTML5, CSS3 (Custom Glassmorphism), JavaScript

Research

Jupyter Notebook

🗂️ Project Architecture

The repository is structured for clarity and ease of deployment:

Hypertension-Predictor/
├── static/           # UI Assets (CSS animations & JS logic)
├── templates/        # HTML structure
├── app.py            # Flask Server & Prediction API
├── logreg_model.pkl  # Serialized ML Model
├── bp_prediction.ipynb # Data Science & Training Notebook
├── patient_data.csv  # Training Dataset
└── README.md         # Project Documentation


💻 Local Installation

Follow these steps to set up the environment and run the predictor:

1. Clone the repository

git clone [https://github.com/sakhamgdeveloper/Predicting-Pulse-harnessing-Machine-learning-for-Blood-Pressure-Analysis.git](https://github.com/sakhamgdeveloper/Predicting-Pulse-harnessing-Machine-learning-for-Blood-Pressure-Analysis.git)
cd Predicting-Pulse-harnessing-Machine-learning-for-Blood-Pressure-Analysis


2. Install Dependencies

pip install flask scikit-learn numpy joblib pandas


3. Launch the Application

python app.py


4. Access the App
Open http://127.0.0.1:5000 in your browser.

🧠 Machine Learning Overview

The underlying model is a Logistic Regression classifier trained on 11 clinical features. It evaluates the probability of hypertension by analyzing:

Demographics: Age groups and Gender.

Clinical Vitals: Symptom severity and presence of shortness of breath.

Medical History: Family history of hypertension and current medication adherence.

Lifestyle: Adherence to heart-healthy dietary controls.

Technical Note: While the interface accepts Systolic/Diastolic inputs for clinical logging, the current ML model focuses on the 11 symptomatic and historical features to determine classification results.

📄 License

This project is open-source. Feel free to use and modify it for educational purposes.
