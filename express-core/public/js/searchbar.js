document.querySelector("#buscador").addEventListener("input", async (e) => {
    try { 
        let peticion = await fetch("http://localhost:3030/api/products")
        let respuesta = await peticion.json()
        let productos = respuesta.productos
        let nombres = productos.map( producto => producto.name)
        let filtro = nombre => String(nombre).toLocaleLowerCase().trim().includes(String(e.target.value).toLocaleLowerCase().trim())
        let resultados = e.target.value.length > 1 ? nombres.filter(filtro) : []
        document.querySelector("#productSearch").innerHTML = null
        resultados.forEach(element => {
            document.querySelector("#productSearch").innerHTML += `<option value="${element}">${element}</option>`
        });
    } catch (error) {
        console.log(error)
    }
})