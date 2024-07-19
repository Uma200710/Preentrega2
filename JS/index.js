class Producto {
    constructor(producto, marca, modelo, precio, tipo) {
        this.producto = producto;
        this.marca = marca || '';
        this.modelo = modelo || '';
        this.precio = precio;
        this.tipo = tipo || '';
    }
}

const productos = [
    new Producto('celular', 'samsung', 'z flip', 2500),
    new Producto('celular', 'motorola', 'g04s', 700),
    new Producto('celular', 'iphone', '12', 2800),
    new Producto('tablet', 'samsung', 'a9', 350),
    new Producto('tablet', 'apple', 'ipad', 800),
    new Producto('tablet', 'huawei', 'p30', 500),
    new Producto('laptop', 'hp', 'pavilion', 1200),
    new Producto('laptop', 'dell', 'xps', 1000),
    new Producto('laptop', 'lenovo', 'ideapad', 900),
    new Producto('fruta', '', '', 50, 'manzana'),
    new Producto('fruta', '', '', 60, 'pera'),
    new Producto('fruta', '', '', 70, 'naranja'),
    new Producto('juguete', '', '', 30, 'pelota'),
    new Producto('juguete', '', '', 20, 'sonajero'),
    new Producto('utilidad', '', '', 40, 'mochila'),
    new Producto('utilidad', '', '', 50, 'cartuchera'),
    new Producto('utilidad', '', '', 60, 'libro'),
];
alert("Bienvenido a la tienda!")
while(true){
function filtrarPorCategoria() {
    const categorias = [...new Set(productos.map(p => p.producto))];
    const categoriaElegidaIndex = (prompt(`Elija una categoría:\n${categorias.map((cat, index) => `${index + 1}. ${cat}`).join('\n')}`)) - 1;
    
    if (categoriaElegidaIndex < 0 || categoriaElegidaIndex >= categorias.length) {
        alert('Categoría no válida.');
        return;
    }

    const categoriaElegida = categorias[categoriaElegidaIndex];
    const productosFiltrados = productos.filter(p => p.producto == categoriaElegida);
    mostrarProductos(productosFiltrados);
}

function filtrarPorPrecio() {
    const precioMax = parseFloat(prompt('Ingrese el precio máximo que puede pagar:'));
    if (isNaN(precioMax) || precioMax <= 0) {
        alert('Precio no válido.');
        return;
    }
    mostrarProductos(productos.filter(p => p.precio <= precioMax));
}

function mostrarProductos(lista) {
    if (lista.length > 0) {
        alert(lista.map(p => `Producto: ${p.producto}, Marca: ${p.marca}, Modelo: ${p.modelo}, Tipo: ${p.tipo}, Precio: ${p.precio}`).join('\n'));
    } else {
        alert('No se encontraron productos.');
    }
}

function main() {
    const opcion = (prompt('Elija una opción:\n1. Filtrar por categoría\n2. Filtrar por precio'));
    if (opcion == 1) {
        filtrarPorCategoria();
    } else if (opcion == 2) {
        filtrarPorPrecio();
    } else {
        alert('Opción no válida.');
    }
}

main();
if(confirm("Quiere salir de la tienda?"))
    break
}
