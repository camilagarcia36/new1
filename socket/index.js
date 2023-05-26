const app = require('express')(); 
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: true, 
    credentials: true, methods: ["GET", "POST"]
    }
    
});

//Evento de socket lado servidor: 
io.on('connection', (socket)=>{
    //lo que sucede cuando hay connection
    console.log("Nuevo user connectado")
    socket.on("sendMessage", (messageInfo)=>{
        console.log("enviando un mensaje")
        socket.emit("recieveMessage", messageInfo); 
    }); 
/*
    socket.on("test", (objeto)=>{
        console.log("escucha TEST con texto"+ objeto.text)
        socket.emit("test2", objeto); 
    });*/ 

}); 





app.get('/',(req,res)=>{
    res.send('<h1>holamundo</h1>')
});

http.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000")
}); 
