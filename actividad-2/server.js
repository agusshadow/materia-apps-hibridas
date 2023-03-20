const http = require('node:http')

let productos = [
            {
                id: 1,
                nombre: "Café Expreso",
                precio: 200
            },
            {
                id: 2,
                nombre: "Café Americano",
                precio: 250
            },
            {
                id: 3,
                nombre: "Café Cortado",
                precio: 200
            },
            {
                id: 4,
                nombre: "Café Doble",
                precio: 250
            },
            {
                id: 4,
                nombre: "Café Lagrima",
                precio: 200
            }
        ]

const server = http.createServer(function(request, response) {

    console.log("escuchando en el puerto 3002");
    response.write("<h1>Mi espectacular pagina web!</h1>");

    if (request.url == "/") {
        response.write("<p>Agustin Gonzalez</p>")
    } 
    else if (request.url == "/productos") {
        response.write("<ul>");
        productos.forEach((producto) => {
            response.write(`<li>${producto. id} | ${producto. nombre} | ${producto. precio}</li>`)
        })
        response.write("</ul>");
    } 
    else if (request.url == "/materia") {
        response.write("<p>Materia: Aplicaciones Hibridas</p>")
    } 
    else if (request.url == "/profesor") {
        response.write("<p>Profesor: Brian Lara</p>")
    } 
    else {
        response.write("<p>Pagina no encontrada</p>")
    }
    
    response.end()
    
})

server.listen(2022)