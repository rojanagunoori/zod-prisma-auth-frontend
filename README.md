# Zod-Prisma-Auth

<video controls width="600">
  <source src="https://github.com/rojanagunoori/zod-prisma-auth-frontend/blob/main/public/zod-prisma-auth.mp4" type="video/mp4">
</video>

![Screenshot 1](https://github.com/rojanagunoori/zod-prisma-auth-frontend/blob/main/public/zodprisma1.png)

![Screenshot 2](https://github.com/rojanagunoori/zod-prisma-auth-frontend/blob/main/public/zodprisma2.png)

![Screenshot 3](https://github.com/rojanagunoori/zod-prisma-auth-frontend/blob/main/public/zodprisma3.png)

![Screenshot 4](https://github.com/rojanagunoori/zod-prisma-auth-frontend/blob/main/public/zodprisma4.png)

![Screenshot 5](https://github.com/rojanagunoori/zod-prisma-auth-frontend/blob/main/public/zodprisma5.png)

**Full-stack authentication system** with **user registration, login, JWT-based authentication, and user management**, built with **React, TypeScript, Prisma, Zod, and Express**.

**Live Demo:**

- Frontend: https://zod-prisma-auth.netlify.app/
- Backend: https://zod-prisma-auth-backend.onrender.com/

**Repositories:**

- Frontend: https://github.com/rojanagunoori/zod-prisma-auth-frontend
- Backend: https://github.com/rojanagunoori/zod-prisma-auth-backend

---

## Project Overview

Zod-Prisma-Auth is a **secure, full-stack authentication and user management system**. It provides a complete solution for registering, logging in, and managing users with **role-based access and JWT authentication.**

**Purpose:**

- Demonstrate a modern full-stack application using **React, TypeScript, Prisma, Express, and PostgreSQL.**
- Show proper **form validation, error handling, and notifications** using Zod and React Hook Form.
- Provide a foundation for building secure, production-ready web apps.

**Why it exists:**

- To serve as a learning resource for modern full-stack authentication workflows.
- To provide type-safe validation and secure JWT authentication in practice.
- To demonstrate admin and user roles for access control.

---

## 🚀 Features

### Frontend Features

- **User Registration & Login:** Users can register with full name, username, email, password, phone, and role, and then log in.
- **Protected Routes:** Pages like Home and Users are only accessible after login using `PrivateRoute`.
- **Role-based UI:** Admins and regular users see different options (e.g., admin can edit/delete users).
- **Form Validation:** Zod + React Hook Form ensures input validation on the client side.
- **Real-time Notifications:** React Toastify shows success/error messages.
  Responsive Design: Works well on both mobile and desktop.
- **Smooth Animations:** Framer Motion animations on page load and form interactions.
- **Edit & Delete Users:** Admin can update or delete users from the Users page.
- **Reusable Components:** Input fields, buttons, and modals for consistency.

### Backend Features

- **Secure Authentication:** JWT-based login for secure session handling.
- **Password Hashing:** Bcrypt hashes passwords before storing in PostgreSQL.
- **Role Management:** Each user has a role (admin or user) stored in the database.
- **CRUD Operations for Users:** Admin can get all users, update details, and delete users.
- **Input Validation:** Zod validates incoming requests for registration, login, and updates.
- **Error Handling:** Custom middleware returns descriptive error messages.
- **Database Integration:** Prisma ORM for type-safe database operations.

---

## Folder / Project Structure

### Backend (Node + Express + Prisma + TypeScript)

```bash
zod-prisma-auth-backend/
├─ prisma/
│  ├─ schema.prisma        # Prisma DB schema
│  └─ migrations/          # Migration files
├─ src/
│  ├─ controllers/         # Auth and User logic
│  ├─ routes/              # API endpoints
│  ├─ middlewares/         # Auth and error middlewares
│  └─ server.ts            # Express server entry
├─ package.json
├─ tsconfig.json
└─ .env                    # Environment variables
```

### Frontend (React + TypeScript + Vite)

```bash
zod-prisma-auth-frontend/
├─ src/
│  ├─ api/                 # Axios API calls
│  ├─ components/          # Reusable UI components
│  ├─ context/             # Auth context provider
│  ├─ hooks/               # Custom hooks (React Query)
│  ├─ pages/               # Page components (Login, Signup, Users)
│  ├─ schemas/             # Zod validation schemas
│  ├─ services/            # API services
│  ├─ types/               # TypeScript types/interfaces
│  ├─ App.tsx              # Main app component
│  └─ main.tsx             # App bootstrap
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

---

## Tech Stack / Environment

### Backend:

- Node.js, Express, TypeScript
- Prisma ORM & PostgreSQL
- Zod for validation
- JWT for authentication
- bcrypt for password hashing

### Frontend:

- React, TypeScript, Vite
- React Hook Form + Zod
- React Router v6
- Axios & React Query
- Framer Motion for UI animations
- React Toastify for notifications

---

## Installation / Setup

### Backend

```bash
git clone https://github.com/rojanagunoori/zod-prisma-auth-backend.git
cd zod-prisma-auth-backend
npm install
```

- Create `.env` file:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/zod_auth
JWT_SECRET=your_jwt_secret
PORT=5000
```

- Run Prisma migrations:

```bash
npx prisma migrate dev --name init
```

- Start backend server:

```bash
npm run dev
```

### Frontend

```bash
git clone https://github.com/rojanagunoori/zod-prisma-auth-frontend.git
cd zod-prisma-auth-frontend
npm install
npm run dev
```

Access frontend at: http://localhost:5173

## Environment Variables

### Backend (.env):

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/zod_auth
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend (.env):

```bash
VITE_API_URL=http://localhost:5000/api
```

---

## API Usage

### Frontend API Calls

- Register User

```bash
import { registerUser } from "../api/auth";

const data = { fullName, username, email, password, phone, role };
const res = await registerUser(data);
console.log(res.message); // success message
```

- Login User

```bash
import { loginUser } from "../api/auth";

const data = { email, password };
const res = await loginUser(data);
console.log(res.token); // JWT token

```

- Get All Users

```bash
import { getAllUsers } from "../services/userService";

const users = await getAllUsers();
console.log(users); // Array of users
```

- Update User

```bash
import { updateUser } from "../services/userService";

await updateUser(userId, { fullName: "New Name" });
```

- Delete User

```bash
import { deleteUser } from "../services/userService";

await deleteUser(userId);

```

### Backend API Endpoints

| Method | Endpoint             | Description         | Auth Required |
| ------ | -------------------- | ------------------- | ------------- |
| POST   | `/api/auth/register` | Register new user   | ❌            |
| POST   | `/api/auth/login`    | Login user          | ❌            |
| GET    | `/api/users`         | Get all users       | ✅            |
| GET    | `/api/users/:id`     | Get single user     | ✅            |
| PUT    | `/api/users/:id`     | Update user details | ✅            |
| DELETE | `/api/users/:id`     | Delete a user       | ✅            |

---

## Key Components

### Frontend Components

- **AuthContext:** Manages authentication state, login/logout functions, and provides context across the app.
- **PrivateRoute:** Restricts access to pages if the user is not authenticated.
- **NavLinks:** Dynamic navbar that shows links based on authentication state.
- **Input Component:** Reusable input field component with label, validation error display, and styling.
- **Pages:**
  - `Login.tsx` → Login form with validation and API call.
  - `Signup.tsx` → Registration form with validation and API call.
  - `Home.tsx` → Protected homepage after login.
  - `Users.tsx` → Admin page to list, edit, and delete users.
  - `NotFound.tsx` → Handles invalid routes.

### Backend Components

- **Controllers:**
  - `authController` → Handles registration and login logic.
  - `userController` → Handles CRUD operations on users.
- **Routes:**
  - `authRoutes` → /api/auth/register and /api/auth/login.
  - `userRoutes` → /api/users endpoints.
- **Middlewares:**
  - `authMiddleware` → Verifies JWT token and protects routes.
  - `errorMiddleware` → Handles errors and sends standardized responses.
- **Prisma Models:**
  - `User` → Stores user data with hashed password, role, and timestamps.

---

## Security

- Passwords are hashed with bcrypt before saving to the database.
- JWT tokens are used for authentication with expiration.
- Protected routes in frontend ensure only authorized users access sensitive pages.
- Input validation with Zod prevents invalid or malicious data.

---

## Challenges Faced During Development

### Frontend

#### 1. Form Validation Complexity

Handling validation for multiple fields (fullName, username, email, password, phone, role) while maintaining a clean user experience was challenging.

- Initially, managing validation manually led to repetitive code and inconsistent error handling.
- This was solved by integrating Zod with React Hook Form, which provided:
  - Schema-based validation
  - Centralized error messages
  - Type-safe form handling
- This approach significantly reduced boilerplate and improved maintainability.

---

#### 2. Managing Asynchronous API States

Handling API calls for login, registration, and user CRUD operations required managing multiple states like loading, success, and error.

- Without proper handling, UI inconsistencies (like duplicate requests or stale data) occurred.
- his was resolved using React Query, which provided:
  - Built-in caching
  - Automatic re-fetching
  - Easy mutation handling
- It also improved performance by reducing unnecessary API calls.

---

#### 3. Implementing Protected Routes

Restricting access to certain pages (like Home and Users) based on authentication status was a key challenge.

- Initially, unauthorized users could access protected routes directly via URL.
- This was solved by implementing a custom PrivateRoute component, which:
  - Checks authentication state from AuthContext
  - Redirects unauthorized users to the login page
- Ensured proper route-level security on the frontend.

---

#### 4. Dynamic UI Updates Without Refresh

After performing actions like updating or deleting users, the UI needed to reflect changes instantly.

- Initially required manual page refresh, which degraded user experience.
- Solved by:
  - Re-fetching data after mutations
  - Leveraging React Query's cache invalidation
- Resulted in a smooth and responsive UI.

---

#### 5. State Management for Authentication

Maintaining authentication state across the application was tricky.

- Needed persistence even after page reload.
- Solved using:
  - `AuthContext` for global state
  - `localStorage` for persistence
- Ensured users stay logged in across sessions.

### Backend

#### 1. Secure Authentication with JWT

Implementing authentication using JWT required careful handling of token generation and validation.

- Challenges included:
  - Ensuring token security
  - Setting expiration times
  - Handling invalid tokens
- Solved by:
  - Using `jsonwebtoken` for token creation
  - Storing only minimal payload (userId)
  - Setting expiration (`1h`) for security

---

#### 2. Password Security with bcrypt

Storing plain-text passwords is insecure, so hashing was necessary.

- Challenge: balancing security and performance
- Solution:
  - Used `bcrypt.hash()` with salt rounds
  - Verified passwords using `bcrypt.compare()`
- Ensured secure storage and authentication.

---

#### 3. Database Schema Design & Migrations

Designing a scalable and consistent database schema using Prisma required careful planning.

- Challenges:
  - Defining correct data types
  - Handling migrations without breaking data
- Solved by:
  - Using Prisma schema (`schema.prisma`)
  - Running controlled migrations (`prisma migrate dev`)
- Resulted in a reliable and type-safe database structure.

---

#### 4. Error Handling & Validation

Handling different types of errors (validation errors, database errors, server errors) consistently was complex.

- Without structure, error responses were inconsistent.
- Solved by:
  - Using Zod for request validation
  - Implementing a global error middleware
- Provided:
  - Consistent API responses
  - Clear error messages for frontend

---

#### 5. API Structure & Scalability

Organizing controllers, routes, and middleware in a scalable way required planning.

- Initially, logic could become tightly coupled.
- Solved by:
  - Separating concerns:
    - Controllers → business logic
    - Routes → endpoints
    - Middleware → cross-cutting concerns
- Made the backend more modular and maintainable.

---

## Future Improvements

### Frontend

#### 1. Pagination & Search for Users

Currently, all users are fetched at once.

- Future improvement:
  - Implement pagination to handle large datasets efficiently
  - Add search and filtering (by name, email, role)
- This will improve performance and usability.

---

#### 2. Dark/Light Theme Toggle

Enhance user experience by allowing theme customization.

- Add toggle between light and dark mode
- Store preference in localStorage
- Improve accessibility and UI personalization

---

#### 3. User Profile Page

Currently, users cannot manage their own profiles.

- Add a profile page where users can:
- Update personal details
- Change password
- Improves user control and personalization.

---

#### 4. Persistent Authentication with Refresh Tokens

Currently, JWT expires after a fixed time.

- Implement refresh tokens to:
  - Automatically renew access tokens
  - Keep users logged in longer securely
- Improves user experience and session management.

---

#### 5. Testing (Unit & Integration)

Testing is currently not implemented.

- Add:
  - Unit tests for components (React Testing Library)
  - Integration tests for API calls
- Ensures reliability and reduces bugs.

---

### Backend

#### 1. Email Verification System

Currently, users can register without verifying email.

- Add email verification using tokens
- Prevent fake or invalid accounts
- Improve security and trust.

---

#### 2. Password Reset Functionality

Allow users to reset forgotten passwords.

- Implement:
  - Token-based password reset
  - Expiration for reset links
- Improves usability and security.

---

#### 3. Role-Based Access Control (RBAC)

Currently, role is stored but not fully enforced.

- Restrict certain endpoints to admins only
- Add middleware for role checking
- Improves security and proper authorization.

---

#### 4. Logging & Monitoring

Currently, errors are only logged in console.

- Add logging tools (e.g., Winston, Morgan)
- Monitor API performance and errors
- Helps in debugging and production readiness.

---

#### 5. Rate Limiting & Security Enhancements

Protect APIs from abuse and attacks.

- Add rate limiting middleware
- Prevent brute-force login attempts
- Improve overall API security.

---

#### 6. Automated Testing

Backend lacks test coverage.

- Add:
  - Unit tests for controllers
  - Integration tests for APIs
- Ensures stability and easier maintenance.

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## Acknowledgments

- Prisma
  – ORM for TypeScript & Node.js
- Zod
  – Type-safe validation
- React Hook Form
  – Forms in React
- Framer Motion
  – Animations for React
- React Toastify
  – Toast notifications
- Inspired by modern full-stack tutorials and authentication best practices

---

## License

This project is licensed under MIT License – see LICENSE

---

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)

---

<!-- # ⚙️ Backend - Zod Prisma Auth

This is the **backend** for the Zod + Prisma authentication system. It handles user registration, login, and secure session management using JWTs.

---

## 🚀 Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **Zod** – Runtime validation
- **Prisma ORM** – Database interaction
- **JWT** – Token-based authentication
- **bcryptjs** – Password hashing
- **dotenv** – Environment variable handling

---

## 📦 Installation & Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file with the following content:

env
Copy
Edit
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
PORT=5000
Set up Prisma schema:

bash
Copy
Edit
npx prisma migrate dev --name init
Start the development server:

bash
Copy
Edit
npm run dev
📁 Folder Structure
bash
Copy
Edit
backend/
├── prisma/
│   └── schema.prisma       # Prisma schema
├── src/
│   ├── controllers/        # Auth logic
│   ├── middlewares/        # JWT authentication
│   ├── routes/             # API routes
│   ├── schemas/            # Zod validation
│   ├── utils/              # Helper functions
│   └── index.ts            # Server entry point
├── .env                    # Environment variables
└── package.json
🛠️ Features
✅ User registration and login

🔐 JWT authentication

🔎 Zod request validation

🔒 Password hashing with bcrypt

⚙️ Prisma-based DB operations

🌐 CORS enabled for frontend communication

API Endpoints
POST /api/auth/register
Registers a new user.

Requires fullName, email, and password.

POST /api/auth/login
Authenticates a user and returns a JWT token.

Requires email and password.

🌍 Deployment
This backend can be deployed to:

Render

Railway

Heroku

Docker

👤 Author
Nagunoori Roja

🔗 GitHub: @rojanagunoori

📜 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

Let me know if you want `.env.example` or Postman collection included too! -->
