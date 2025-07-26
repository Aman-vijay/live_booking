const express = require("express");
const PORT = 5000
const app = express();
const http = require("http")
const path = require("path")
const {Server} = require("socket.io")
const cors = require("cors")



const server = http.createServer(app)
const io = new Server(server,{
  cors:{
    origin:"http:localhost:3000",
    methods:["GET", "POST"]
  }

})
// app.use(express.static(path.resolve("./public")));

//Array for storing
let bookings = [];



//Socket io
io.on("connection",(socket)=>{
    console.log("A new user is connected",socket.id)

    bookings.forEach((booking)=>{
        socket.emit("A new Booking",booking)
    })


})

setInterval(()=>{
     const booking = generateRandomBooking();
  bookings.unshift(booking);

    io.emit("new-booking",booking);
    // console.log('new-booking:', booking)
},5000)

function generateRandomBooking() {
  const venues = ['Cafe Mocha', 'Green Garden', 'Ocean View', 'The Hangout', 'Skyline Lounge','Hotel Lagoon',"The Leela"];
  const randomVenue = venues[Math.floor(Math.random() * venues.length)];
  const partySize = Math.floor(Math.random() * 6) + 1; 
  const time = new Date().toLocaleTimeString();

  return {
    venueName: randomVenue,
    partySize,
    time,
  };
}


app.get("/",(req,res)=>{
   return res.sendFile("/public/index.html")
})
server.listen(PORT,()=>{
    console.log(`Server is listening at: ${PORT}`)
})

