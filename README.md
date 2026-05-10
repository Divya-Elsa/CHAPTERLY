# 📚 Chapterly – Reading Tracker App

A full-stack reading tracker application to manage and monitor reading habits.

---

## 🚀 Tech Stack

### Frontend
- React
- JavaScript / CSS
- Node.js

### Backend
- Spring Boot
- Java
- Maven

---

## 📁 Project Structure

```
CHAPTERLY/

├── frontend/  
│   ├── node_modules/  
│   ├── public/  
│   ├── src/  
│   ├── package.json  
│   └── package-lock.json  

├── readingtracker/  
│   ├── .mvn/  
│   ├── src/  
│   │   ├── main/  
│   │   │   ├── java/com/example/readingtracker/  
│   │   │   │   ├── controller/  
│   │   │   │   ├── model/  
│   │   │   │   ├── repository/  
│   │   │   │   └── ReadingtrackerApplication.java  
│   │   │   └── resources/  
│   │   └── test/  
│   ├── target/  
│   ├── pom.xml  
│   ├── mvnw  
│   ├── mvnw.cmd  
│   └── HELP.md  

├── .gitignore  
└── README.md  
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/chapterly.git
cd chapterly
```

---

### 2. Run Backend (Spring Boot)

```bash
cd readingtracker
./mvnw spring-boot:run
```

**Windows:**
```bash
mvnw.cmd spring-boot:run
```

Backend runs on:  
👉 http://localhost:8081

---

### 3. Run Frontend (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs on:  
👉 http://localhost:3000

---

## 🔗 API Endpoints (Sample)

- GET `/books` → Get all books  
- POST `/books` → Add a new book  
- PUT `/books/{id}` → Update book  

---

## 📦 Features

- 📖 Track reading progress  
- ➕ Add / update / delete books  
- 🔄 Full-stack integration  

---

## 🧪 Testing

```bash
cd readingtracker
./mvnw test
```

---

## 🛠️ Future Improvements

- Authentication (JWT)  
- Dashboard analytics  
- Deployment (Docker / Cloud)  

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Push and open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.