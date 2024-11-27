# Ticket Management System

A backend system for managing bus tickets, including user authentication, role-based access control, and ticket purchasing functionality. Developed using **Node.js**, **Express.js**, and **MongoDB** (Mongoose), with a modular design for scalability. **TypeScript** is optionally supported.

---

## Features

### Core Functionalities
1. **Authentication**:
   - User registration, login, and logout with JWT-based authentication.
   - Role-based authorization (Admin, User).
2. **Admin Operations**:
   - Add, update, and delete buses.
   - Manage tickets (create, update, delete) with price and time slot details.
3. **User Operations**:
   - View available buses and tickets.
   - Purchase tickets for specific buses at a specified time.
4. **Additional Features**:
   - Input validation and error handling for all endpoints.
   - Modular design for scalability and maintainability.

---

## ER Diagram

The ER diagram illustrates the relationships between `Users`, `Buses`, and `Tickets`.  
Find the ER diagram [here](https://drive.google.com/file/d/1aXrzDu3_pXIP9BMQl47XYBdBd8PaA7Oj/view?usp=sharing). 


---

## API Documentation

Comprehensive API documentation, including request/response structures and sample payloads, is available in the [Postman collection](https://api.postman.com/collections/35012738-f14f8cb5-7d24-4434-9587-52f48be337f6?access_key=PMAT-01JDQ19TK19N5AX3B9BZGXXM4P). and use to just import in postman .

### Authentication APIs
- **POST** https://ticketmanagementsystem-liart.vercel.app/auth/register  
- **POST** https://ticketmanagementsystem-liart.vercel.app/auth/login 
  User login to receive a JWT.  
- **POST** https://ticketmanagementsystem-liart.vercel.app/auth/logout 
  Logout the user.

### Admin APIs
 *creatre bus 
- **POST** https://ticketmanagementsystem-liart.vercel.app/admin/bus? 
 *Update an existing bus.  
- **PUT** https://ticketmanagementsystem-liart.vercel.app/admin/bus/6745cd614b9400cd9e3254d0
 *Delete a bus.  
- **DELETE** https://ticketmanagementsystem-liart.vercel.app/admin/bus/6745cd614b9400cd9e3254d0  
* Add a new ticket. 
- **POST** https://ticketmanagementsystem-liart.vercel.app/admin/ticket  
  * Update a ticket.  
- **PUT** https://ticketmanagementsystem-liart.vercel.app/admin/ticket/6745c8a34aac751280e53020 
 * Delete a ticket.  
- **DELETE** https://ticketmanagementsystem-liart.vercel.app/admin/ticket/6745c8a34aac751280e53020
  

### User APIs
* View all available buses. 
- **GET** https://ticketmanagementsystem-liart.vercel.app/buses?  
* View tickets by bus and time perio
- **GET** https://ticketmanagementsystem-liart.vercel.app/tickets
 * Purchase a ticket for a bus.  
- **POST** https://ticketmanagementsystem-liart.vercel.app/tickets/purchas  
---
## Technology Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Language**: JavaScript/TypeScript (preferred)  

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ticket-management-system.git
   cd ticket-management-system
