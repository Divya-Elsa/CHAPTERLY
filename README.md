# 📚 Chapterly – Reading Tracker App

A full-stack reading tracker application to manage and monitor reading habits. Built with **React** frontend and **Spring Boot** backend, containerized with Docker for easy deployment.

---

## 🚀 Tech Stack

### Frontend
- **React** – UI framework
- **JavaScript / CSS** – Styling and interactivity
- **Node.js** – Runtime environment
- **Nginx** – Web server (production)

### Backend
- **Spring Boot** – REST API framework
- **Java** – Core language
- **Maven** – Build and dependency management
- **MySQL/PostgreSQL** – Database

### DevOps & Deployment
- **Docker** – Containerization
- **Docker Compose** – Multi-container orchestration

---

## 📁 Project Structure

```
CHAPTERLY/
├── docker-compose.yml
├── dump.sql
├── LICENSE
├── README.md
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   ├── build/
│   │   ├── asset-manifest.json
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── static/
│   │       ├── css/
│   │       │   └── main.e6c13ad2.css
│   │       └── js/
│   │           ├── 453.20359781.chunk.js
│   │           ├── main.2ab41ae8.js
│   │           └── main.2ab41ae8.js.LICENSE.txt
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── pages/
│           ├── AddBook.js
│           ├── Dashboard.js
│           ├── EditBook.js
│           └── Landing.js
└── readingtracker/
    ├── Dockerfile
    ├── HELP.md
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── com/
    │   │   │       └── example/
    │   │   │           └── readingtracker/
    │   │   │               ├── ReadingtrackerApplication.java
    │   │   │               ├── controller/
    │   │   │               │   └── BookController.java
    │   │   │               ├── model/
    │   │   │               │   └── Book.java
    │   │   │               └── repository/
    │   │   │                   └── BookRepository.java
    │   │   └── resources/
    │   │       ├── application.properties
    │   │       ├── static/
    │   │       └── templates/
    │   └── test/
    │       └── java/
    │           └── com/
    │               └── example/
    │                   └── readingtracker/
    │                       └── ReadingtrackerApplicationTests.java
    └── target/
        ├── readingtracker-0.0.1-SNAPSHOT.jar.original
        ├── classes/
        │   ├── application.properties
        │   └── com/
        │       └── example/
        │           └── readingtracker/
        │               ├── controller/
        │               ├── model/
        │               └── repository/
        ├── generated-sources/
        │   └── annotations/
        ├── generated-test-sources/
        │   └── test-annotations/
        ├── maven-archiver/
        │   └── pom.properties
        ├── maven-status/
        │   └── maven-compiler-plugin/
        │       ├── compile/
        │       │   └── default-compile/
        │       │       ├── createdFiles.lst
        │       │       └── inputFiles.lst
        │       └── testCompile/
        │           └── default-testCompile/
        │               ├── createdFiles.lst
        │               └── inputFiles.lst
        └── test-classes/
            └── com/
                └── example/
                    └── readingtracker/

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/chapterly.git
cd chapterly
```

---

### 2. Using Docker Compose (Recommended)

The entire application can be deployed using Docker Compose:

```bash
docker-compose up --build
```

This will start both the frontend and backend services.

**Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8081

---

### 3. Local Setup (Development)

#### Backend Setup (Spring Boot)

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

**Database Setup:**
- Import `dump.sql` into your MySQL/PostgreSQL database
- Update `application.properties` with your database credentials

---

#### Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs on:  
👉 http://localhost:3000

---

## � Project Structure Overview

```
CHAPTERLY/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── pages/        # Page components (Dashboard, AddBook, EditBook, Landing)
│   │   ├── assets/       # Static assets (fonts, images, etc.)
│   │   ├── App.js        # Main application component
│   │   └── index.js      # React entry point
│   ├── public/           # Static assets
│   ├── build/            # Production build output
│   ├── Dockerfile        # Frontend Docker image
│   ├── nginx.conf        # Nginx configuration
│   └── package.json      # Node dependencies
│
├── readingtracker/       # Spring Boot backend application
│   ├── src/
│   │   ├── main/java/com/example/readingtracker/
│   │   │   ├── controller/  # BookController (API endpoints)
│   │   │   ├── model/       # Book entity
│   │   │   └── repository/  # BookRepository (Data access)
│   │   └── resources/
│   │       └── application.properties  # Configuration
│   ├── pom.xml           # Maven dependencies
│   ├── Dockerfile        # Backend Docker image
│   └── mvnw              # Maven wrapper script
│
├── docker-compose.yml    # Multi-container configuration
├── dump.sql              # Database schema and sample data
├── LICENSE               # MIT License
└── README.md             # This file
```

---

## 🔗 API Endpoints

### Book Management
- **GET** `/api/books` → Get all books  
- **POST** `/api/books` → Add a new book  
- **PUT** `/api/books/{id}` → Update a book  
- **DELETE** `/api/books/{id}` → Delete a book  
- **GET** `/api/books/{id}` → Get book details

### Request/Response Format
All endpoints use JSON format for request/response bodies.  

---

## 📦 Features

### Current Features
- 📖 **Track Reading Progress** – Monitor books you're reading or plan to read
- ➕ **Add Books** – Easily add new books to your collection with details
- ✏️ **Update Books** – Edit book information and reading status
- 🗑️ **Delete Books** – Remove books from your collection
- 📊 **Dashboard** – View all your books in one place
- 🔄 **Full-Stack Integration** – Seamless communication between frontend and backend

### Frontend Pages
- **Landing Page** – Welcome and introduction
- **Dashboard** – View all tracked books
- **Add Book** – Form to add a new book
- **Edit Book** – Modify existing book details  

---

## 🧪 Testing

### Backend Tests
```bash
cd readingtracker
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

---

## 📋 Environment Variables

### Backend (`readingtracker/src/main/resources/application.properties`)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/chapterly
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
server.port=8081
```

### Frontend (`.env`)
```
REACT_APP_API_URL=http://localhost:8081
```

---

## 🐳 Docker Configuration

### Build Images
```bash
docker-compose build
```

### Start Services
```bash
docker-compose up
```

### Stop Services
```bash
docker-compose down
```

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port already in use | Change port in `application.properties` or `.env` |
| Database connection error | Ensure MySQL/PostgreSQL is running and credentials are correct |
| Frontend not connecting to API | Check `REACT_APP_API_URL` and backend is running |
| Docker build fails | Ensure Docker daemon is running and sufficient disk space |

---

## 📚 Key Technologies & Components

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Frontend | React | User interface |
| Backend | Spring Boot | REST API |
| Database | MySQL/PostgreSQL | Data persistence |
| Build Tool | Maven | Dependency management (Backend) |
| Package Manager | npm | Dependency management (Frontend) |
| Containerization | Docker | Application deployment |
| Web Server | Nginx | Production frontend server |

## 🛠️ Future Improvements

- 🔐 **Authentication** – JWT-based user authentication and authorization
- 📊 **Advanced Analytics** – Reading statistics and dashboard insights
- 🌐 **Cloud Deployment** – AWS, Azure, or Google Cloud integration
- 📱 **Mobile App** – React Native or Flutter mobile client
- 💬 **Reviews & Ratings** – Add reviews and ratings for books
- 🎯 **Reading Goals** – Set and track reading targets
- 🔔 **Notifications** – Reminders for reading updates
- 🌙 **Dark Mode** – Theme customization  

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Push and open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.