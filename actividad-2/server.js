const http = require('node:http')

const server = http.createServer(function(request, response) {

    console.log("escuchando en el puerto 3002");

    if (request.url == "/") {
        response.write("Agustin Gonzalez")
    } else if (request.url == "/productos") {
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
    } else if (request.url == "/materia") {
        response.write("Materia: Aplicaciones Hibridas")
    } else if (request.url == "/profesor") {
        response.write("Profesor: Brian Lara")
    } else {
        response.write("Pagina no encontrada")
    }
    
    response.end()
    
})

server.listen(3002)