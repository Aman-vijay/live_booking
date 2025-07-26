#  Live Bookings Viewer

A real-time full stack web application that displays incoming venue bookings live on a dashboard, using **Node.js**, **Express**, **Socket.IO**, and **HTML/CSS/JavaScript**.

> Built to simulate real-world dashboards for admins managing bookings.



##  Features

-  Real-time updates using **WebSockets (Socket.IO)**
-  Mock booking data generated every 5 seconds
-  No page refresh required
## Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Backend  | Node.js, Express.js, Socket.IO |
| Frontend | HTML, CSS, JavaScript |
| Storage  | In-memory array    |



## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/live-bookings-viewer.git
   cd live-bookings-viewer 
   
2. **Install dependencies**
    ```bash
    npm install
3. **Start the server**
    ```bash
    node index.js
## Screenshots

![Alt text](/public/screenshot.png?raw=true "Live Booking")



## Project Structure and Integration

This project follows a unified full-stack architecture:

All frontend files (index.html, styles.css, etc.) are stored in /public.

The Express backend serves this folder statically via:

  ```js
app.use(express.static(path.resolve(__dirname, "public"))); 
```

## Booking Format

```json
{
  "venueName": "Cafe Mocha",
  "partySize": 3,
  "time": "10:24:52 AM"
}
```